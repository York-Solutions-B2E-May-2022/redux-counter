import {screen, render, getAllByRole} from "@testing-library/react";
import {Counter} from "./Counter";
import userEvent from "@testing-library/user-event";
import {ADD_COUNT} from "../modules/counter";

test(
    'should show a button with the text "Add"',
    () => {
        render(<Counter _useDispatch={() => {}} _useSelector={() => {}}/>)
        const button = screen.getByText("Add");
        expect(button.tagName).toBe('BUTTON');
    }
)

test(
    'should show a div with text "Counter: {count}"',
    () => {
        const _useDispatch = () => {}
        const _useSelector = (fn) => {
            return fn({count: 3})
        }

        render(<Counter _useDispatch={_useDispatch} _useSelector={_useSelector}/>)

        expect(screen.getByText('Count: 3')).toBeInTheDocument();
    }
)

test(
    'should dispatch ADD_COUNT event when add button is clicked',
    () => {
        const dispatch = jest.fn()
        render(<Counter _useDispatch={() => dispatch} _useSelector={() => {}}/>)
        const button = screen.getByText("Add");
        userEvent.click(button)

        expect(dispatch).toHaveBeenCalledWith({
            type: ADD_COUNT
        })
    }
)