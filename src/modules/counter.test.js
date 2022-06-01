import reducer, {ADD_COUNT, ON_ADD, ON_DIVIDE, ON_MULTI, ON_SET_VAL1, ON_SET_VAL2, ON_SUB} from "./counter";

test(
    'should init to correct state',
    () => {
        const state = reducer()
        expect(state).toStrictEqual({
            count: 0,
            value1: '',
            value2: '',
            calculatedValue: 0
        })
    }
)

test(
    'should add 1 to count when ADD_COUNT action is dispatched',
    () => {
        const initState = reducer();
        const state = reducer(initState, {type: ADD_COUNT})
        expect(state).toStrictEqual({
            ...initState,
            count: 1
        })
    }
)

test(
    'should set the value1 when ON_SET_VAL1 is called',
    () => {
        const initState = reducer();
        const state = reducer(initState, {type: ON_SET_VAL1, value: '1.12'})
        expect(state).toStrictEqual({
            ...initState,
            value1: 1.12
        })
    }
)

test(
    'should set the value2 when ON_SET_VAL2 is called',
    () => {
        const initState = reducer();
        const state = reducer(initState, {type: ON_SET_VAL2, value: '2.24'})
        expect(state).toStrictEqual({
            ...initState,
            value2: 2.24
        })
    }
)


test(
    'should set calculatedValue to the addition of the float parsed value1 and the float parsed value 2 when ON_ADD is called',
    () => {
        const initState = reducer();
        initState.value1 = '10.2';
        initState.value2 = '20';

        const state = reducer(initState, {type: ON_ADD})
        expect(state).toStrictEqual({
            ...initState,
            calculatedValue: 30.2
        })
    }
)

test(
    'should set calculatedValue to the subtraction of float parsed value1 and the float parsed value 2 when ON_SUB is called',
    () => {
        const initState = reducer();
        initState.value1 = '1.5';
        initState.value2 = '2';

        const state = reducer(initState, {type: ON_SUB})
        expect(state).toStrictEqual({
            ...initState,
            calculatedValue: -0.5
        })
    }
)

test(
    'should set calculatedValue to the product of the float parsed value1 and the float parsed value 2 when ON_MULTI is called',
    () => {
        const initState = reducer();
        initState.value1 = '0.25';
        initState.value2 = '4';

        const state = reducer(initState, {type: ON_MULTI})
        expect(state).toStrictEqual({
            ...initState,
            calculatedValue: 1
        })
    }
)


test(
    'should set calculatedValue to the quotient of the float parsed value1 and the float parsed value 2 when ON_DIVIDE is called',
    () => {
        const initState = reducer();
        initState.value1 = '1';
        initState.value2 = '0.5';

        const state = reducer(initState, {type: ON_DIVIDE})
        expect(state).toStrictEqual({
            ...initState,
            calculatedValue: 2
        })
    }
)