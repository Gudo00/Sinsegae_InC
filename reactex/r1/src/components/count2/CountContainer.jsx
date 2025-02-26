import CountDisplay from "./CountDisplay.jsx";
import CountButtons from "./CountButtons.jsx";
import {useState} from "react";

function CountContainer() {

    //상태
    const [num, setNum] = useState(1)

    const plus = (amount) => {
        setNum(num + amount)
    }


    return (
        <div className={'p-3 justify-center items-center'}>
            <CountDisplay value={num}></CountDisplay>
            <CountButtons plusFn={plus}></CountButtons>
        </div>
    );
}

export default CountContainer;