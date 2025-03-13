import React from 'react';
import useCouterStore from "../../stores/useCouterStore.jsx";

function Count2Double() {

    const {makeDouble} = useCouterStore()

    return (
        <div>
            <button onClick={makeDouble}>DOUBLE</button>
        </div>
    );
}

export default Count2Double;