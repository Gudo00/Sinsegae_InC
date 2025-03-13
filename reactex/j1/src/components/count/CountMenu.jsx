import React, {useContext} from 'react';
import {CountContext} from "./CountContainer.jsx";
import {useSelector} from "react-redux";

function CountMenu() {

    const {count} = useContext(CountContext)

    const obj = useSelector(state => state.counter)

    return (
        <div>
            <h2>Count Menu <b>{count % 2 === 0? 'EVEN': 'ODD'}</b>  </h2>
            <h2>Count Menu <b>{obj.num}</b>  </h2>
        </div>
    );
}

export default CountMenu;