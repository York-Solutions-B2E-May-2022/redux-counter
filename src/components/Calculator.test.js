import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {ON_ADD, ON_DIVIDE, ON_MULTI, ON_SET_VAL1, ON_SET_VAL2, ON_SUB} from "../modules/counter";
import {Calculator} from "./Calculator";
import {Counter} from "./Counter";

test(
    `should show a input with placeholder "Value 1" and type text
    that dispatches a ON_SET_VAL1 on change with the correct value`,
    () => {
        const dispatch = jest.fn()
        render(<Calculator _useDispatch={() => dispatch} _useSelector={() => {
        }}/>)

        const input = screen.getByPlaceholderText('Value 1');
        expect(input).toHaveAttribute('type', 'number')

        userEvent.type(input, '1');
        expect(dispatch).toHaveBeenCalledWith({
            type: ON_SET_VAL1,
            value: '1'
        })
    }
)

test(
    `should show a input with placeholder "Value 2" and type text
    that dispatches a ON_SET_VAL2 on change with the correct value`,
    () => {
        const dispatch = jest.fn()
        render(<Calculator _useDispatch={() => dispatch} _useSelector={() => {
        }}/>)

        const input = screen.getByPlaceholderText('Value 2');
        expect(input).toHaveAttribute('type', 'number')

        userEvent.type(input, '4');
        expect(dispatch).toHaveBeenCalledWith({
            type: ON_SET_VAL2,
            value: '4'
        })
    }
)

test(
    'should show a "Add" button that dispatches a ON_ADD event when clicked',
    () => {
        const dispatch = jest.fn()
        render(<Calculator _useDispatch={() => dispatch} _useSelector={() => {
        }}/>)

        const button = screen.getByText("Add");
        expect(button.tagName).toBe("BUTTON");

        userEvent.click(button);
        expect(dispatch).toHaveBeenCalledWith({type: ON_ADD})
    }
)

test(
    'should show a "Subtract" button that dispatches a ON_SUB event when clicked',
    () => {
        const dispatch = jest.fn()
        render(<Calculator _useDispatch={() => dispatch} _useSelector={() => {
        }}/>)

        const button = screen.getByText("Subtract");
        expect(button.tagName).toBe("BUTTON");

        userEvent.click(button);
        expect(dispatch).toHaveBeenCalledWith({type: ON_SUB})
    }
)

test(
    'should show a "Multiply" button that dispatches a ON_MULTI event when clicked',
    () => {
        const dispatch = jest.fn()
        render(<Calculator _useDispatch={() => dispatch} _useSelector={() => {
        }}/>)

        const button = screen.getByText("Multiply");
        expect(button.tagName).toBe("BUTTON");

        userEvent.click(button);
        expect(dispatch).toHaveBeenCalledWith({type: ON_MULTI})
    }
)

test(
    'should show a "Divide" button that dispatches a ON_DIVIDE event when clicked',
    () => {
        const dispatch = jest.fn()
        render(<Calculator _useDispatch={() => dispatch} _useSelector={() => {
        }}/>)

        const button = screen.getByText("Divide");
        expect(button.tagName).toBe("BUTTON");

        userEvent.click(button);
        expect(dispatch).toHaveBeenCalledWith({type: ON_DIVIDE})
    }
)

test(
    'should show a div with the calculatedValue from state',
    () => {
        const _useSelector = (fn) => fn({calculatedValue: 12})
        render(<Calculator _useDispatch={() => {}} _useSelector={_useSelector}/>)
        expect(screen.getByText("12")).toBeInTheDocument();
    }
)