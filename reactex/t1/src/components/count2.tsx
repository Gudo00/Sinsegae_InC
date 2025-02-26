import { useState } from "react";

interface CountDTO {
    num : number
}

// 초깃값
const initState: CountDTO = {num: 10}

function Count2() {

    const [current, setCurrent] = useState<CountDTO>(initState)


    return ( 
        <>
            <h1>COUNT2</h1>
        </>
    );
}

export default Count2;