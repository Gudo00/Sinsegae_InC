import {useState} from "react";
import CountDisplay from "./countDisplay.tsx";
import CountButtons from "./countButtons.tsx";

function CountContainer() {

    const [count, setCount] = useState<Count>({num:1})

    function changeCount (value: number) {

        count.num += value;

        setCount({...count})
    }


    return (
        <div className={'bg-amber-200 h-1/3 text-center pt-4 text-4xl bold'}>
            COUNT CONTAINER
            <CountDisplay countObj={count}></CountDisplay>
            <CountButtons change={changeCount}></CountButtons>
        </div>
    );
}

export default CountContainer;