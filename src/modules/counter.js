export const ADD_COUNT = 'counter/ADD_COUNT';

export const ON_SET_VAL1 = 'counter/ON_SET_VAL1';
export const ON_SET_VAL2 = 'counter/ON_SET_VAL2';

export const ON_ADD = 'counter/ON_ADD';
export const ON_SUB = 'counter/ON_SUB';
export const ON_MULTI = 'counter/ON_MULTI';
export const ON_DIVIDE = 'counter/ON_DIVIDE';

const initState = {
    count: 0,
    value1: '',
    value2: '',
    calculatedValue: 0
}

export default function reducer(state = initState, action) {
    switch (action?.type) {
        case ADD_COUNT:
            return {
                ...state,
                count: state.count + 1
            }
        case ON_SET_VAL1:
            const num1 = Number.parseFloat(action.value)
            return {
                ...state,
                value1: action.value
            }
        case ON_SET_VAL2:
            return {
                ...state,
                value2: action.value
            }
        case ON_ADD:
            return {
                ...state,
                calculatedValue: parseFloat(state.value1) + parseFloat(state.value2)
            }
        case ON_SUB:
            return {
                ...state,
                calculatedValue: parseFloat(state.value1) - parseFloat(state.value2)
            }
        case ON_MULTI:
            return {
                ...state,
                calculatedValue: parseFloat(state.value1) * parseFloat(state.value2)
            }
        case ON_DIVIDE:
            return {
                ...state,
                calculatedValue: parseFloat(state.value1) / parseFloat(state.value2)
            }
        default:
            return {
                ...state
            }
    }
}