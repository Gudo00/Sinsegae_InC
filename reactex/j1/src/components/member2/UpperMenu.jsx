import React from 'react';
import useLoginStore from "../../stores/useLoginStore.jsx";

function UpperMenu() {

    const {user, logout} = useLoginStore()

    console.log("-------------")
    console.log(user)


    return (
        <div>
            <hr/>
            <h2>UID: {user.uid} </h2>
            <h2>NICKNAME: {user.nickname} </h2>

            {user.uid && <button onClick={logout}>LOGOUT</button>}

            <hr/>
        </div>
    );
}

export default UpperMenu;