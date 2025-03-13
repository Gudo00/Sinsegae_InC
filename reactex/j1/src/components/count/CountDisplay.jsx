import {useContext} from "react";
import {CountContext} from "./CountContainer.jsx";
import CountButtons from "./CountButtons.jsx";
import {useSelector} from "react-redux";

function CountDisplay() {

    const obj = useSelector(state => state.counter)

    console.log(obj)

    return (
        <div>
            Count Display <b>{obj.num}</b>
            <CountButtons></CountButtons>
        </div>
    );
}

export default CountDisplay;