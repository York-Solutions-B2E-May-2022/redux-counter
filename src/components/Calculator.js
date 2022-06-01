import {ON_ADD, ON_DIVIDE, ON_MULTI, ON_SET_VAL1, ON_SET_VAL2, ON_SUB} from "../modules/counter";
import {useDispatch, useSelector} from "react-redux";
import {Button, Card, Form} from "react-bootstrap";

import {CgMathDivide, CgMathMinus, CgMathPlus} from "react-icons/cg";
import {FaDivide, FaMinus, FaPlus, FaTimes} from "react-icons/fa";

export function Calculator({_useDispatch = useDispatch, _useSelector = useSelector}) {
    const dispatch = _useDispatch()
    const value1 = _useSelector(state => state.value1);
    const value2 = _useSelector(state => state.value2);
    const calculatedValue = _useSelector(state => state.calculatedValue);

    function onValue1Change(event) {
        dispatch({type: ON_SET_VAL1, value: event.target.value})
    }

    function onValue2Change(event) {
        dispatch({type: ON_SET_VAL2, value: event.target.value})
    }

    return <Card>
        <Card.Header>
            Result: <span>{calculatedValue}</span>
        </Card.Header>

        <div className={'d-flex'}>

            <div className={'d-flex flex-column w-100 m-1'}>
                <input onChange={onValue1Change} value={value1} type={"number"} placeholder={'Value 1'}
                       className={'flex-grow-1 m-3 p-2'}/>
                <input onChange={onValue2Change} value={value2} type={"number"} placeholder={'Value 2'}
                       className={'flex-grow-1 m-3 p-2'}/>
            </div>

            <div className={'d-flex flex-column w-100 m-3'}>
                <Button variant={'outline-secondary'} className={'flex-grow-1 m-1'}
                        onClick={() => dispatch({type: ON_ADD})}>
                    <FaPlus/>
                    <span className={'pl-2'}>Add</span>
                </Button>
                <Button variant={'outline-secondary'} className={'flex-grow-1 m-1'}
                        onClick={() => dispatch({type: ON_SUB})}>
                    <FaMinus/>
                    <span>Subtract</span>
                </Button>
                <Button variant={'outline-secondary'} className={'flex-grow-1 m-1'}
                        onClick={() => dispatch({type: ON_MULTI})}>
                    <FaTimes/>
                    Multiply
                </Button>
                <Button variant={'outline-secondary'} className={'flex-grow-1 m-1'}
                        onClick={() => dispatch({type: ON_DIVIDE})}>
                    <FaDivide/>
                    Divide
                </Button>
            </div>
        </div>
    </Card>
}