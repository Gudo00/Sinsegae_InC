import React, {createContext, useState} from 'react';
import CountDisplay from "./CountDisplay.jsx";
import CountMenu from "./CountMenu.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getProductsList} from "../../slices/productsSlice.jsx";

export const CountContext = createContext()

function CountContainer() {

    const [count, setCount] = useState(1)

    const user = useSelector(state => state.login)




    const plus = () => {
        setCount(count + 1)
    }

    const obj = {count: count, plus: plus}

    //const dispatch = useDispatch()

    //const productResult = useSelector(state => state.products)

    //dispatch(getProductsList())



    return (
        <CountContext.Provider value={obj}>
            <div>

                <button onClick={handleClick}>GET PRODUCTS</button>

                {productResult.dtoList.map(product => <li key={product.pno}> {product.pname}</li>)}


                Count Container <b>{user.uid}</b>

                <CountMenu></CountMenu>
                <CountDisplay></CountDisplay>

            </div>
        </CountContext.Provider>
    );
}

export default CountContainer;