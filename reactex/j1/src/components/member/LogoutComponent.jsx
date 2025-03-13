import React from 'react';
import {useDispatch} from "react-redux";
import {logout} from "../../slices/loginSlice.jsx";

function LogoutComponent() {

    const dispatch = useDispatch()

    return (
        <div>
            <h1>Logout Component</h1>
            <button onClick={() => {
                dispatch(logout())
            }}>LOGOUT</button>
        </div>
    );
}

export default LogoutComponent;