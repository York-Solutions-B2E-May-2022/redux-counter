import './App.css';
import {Counter} from "./components/Counter";
import {Calculator} from "./components/Calculator";

function App() {
    return <div className={'m-5'}>
        <Counter/>
        <Calculator/>
    </div>
}

export default App;
