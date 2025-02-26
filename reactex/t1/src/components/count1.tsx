import { useState } from "react";

// start는 필수, 나머지는 ?로 선택(옵션) 처리
interface CountProp{
    start: number,
    plusShow ?: boolean,
    minusShow ?: boolean,
    resetShow ?: boolean
}

function Count1({start, plusShow, minusShow}:CountProp) {

    const [num, setNum] = useState<number>(start)
  
    function change():void {
        setNum(num + 1)
    }

    return ( 
        <div>
            <h1>Count 1</h1>

        </div>
     );
}

export default Count1 ;