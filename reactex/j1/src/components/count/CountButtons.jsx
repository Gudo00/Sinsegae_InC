import React, {useContext} from 'react';
import {CountContext} from "./CountContainer.jsx";
import {useDispatch} from "react-redux";
import {dec, inc} from "../../slices/countSlice.jsx";

function CountButtons() {

    // ctx {count: count, plus: plus}
    //const {plus} = useContext(CountContext)

    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => {
                dispatch(inc(2))
            }}> + </button>
            <button onClick={() => {
                dispatch(dec(3))
            }}> - </button>
        </div>
    );
}

export default CountButtons;