import {useState} from "react";

function Count2() {

    // 기존의 보관하고 상태 객체와 다른 객체일 경우에만 다시 렌더링한다.
    // numver였을 떄는 문제가 없었다.
    // useState는 함수
    const [count, setCount] = useState({num:0})

    const plus = () => {

        // const temp = {...count}
        // console.log(count == temp ) // 새로운 메모리 공간을 만들고 count 객체를 쫙 펴서 복사
        // temp.num += 1
        // setCount(temp)

        setCount({num: count.num + 1})

    }


    return (
        <div className={'border-2 p-2'}>
            <div className={'text-4xl'}>
                {count.num}
            </div>
            <button onClick={plus}>PLUS</button>
        </div>
    );
}

export default Count2;