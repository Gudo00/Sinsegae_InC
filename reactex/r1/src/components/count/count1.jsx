import {useState} from "react";
import {markVariableAsUsed} from "eslint-plugin-react/lib/util/eslint.js";

function Count1({value, plusShow = true, minusShow = true, resetShow = true}) {

    const [num, setNum] = useState(value)

    const clickPlus = () => {
        setNum(num + 1)
    }

    const clickMinus = () => {
        setNum(num - 1)
    }

    const clickReset = () => {
        setNum(value)
    }

    // // 3초마다 한 번씩 동작
    // setInterval(() => {
    //     setNum(num+1)
    // },3000)
    return (
        <div>
            <h1>{num}</h1>

            {plusShow && <div> <button onClick={clickPlus}> + </button> </div>}

            {minusShow && <div> <button onClick={clickMinus}> - </button> </div>}

            <div> <button onClick={clickReset}> Reset </button> </div>
        </div>
    );
}

export default Count1;