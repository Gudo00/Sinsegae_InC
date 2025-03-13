import React from 'react';
import useCouterStore from "../../stores/useCouterStore.jsx";

function Count2Ex() {

    const {count, inc, dec} = useCouterStore()

    return (
        <div>
            <h1>Count2 Ex </h1>
            <h1>COUNT: {count}  </h1>
            <div>
                <button onClick={() => inc(3)}>PLUS</button>
                <button onClick={() => dec(3)}>MINUS</button>
            </div>
        </div>
    );
}

export default Count2Ex;