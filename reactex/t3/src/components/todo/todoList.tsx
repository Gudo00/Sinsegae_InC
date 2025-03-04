import {getTodoList} from "../../apis/todoApi.tsx";
import {useEffect, useState} from "react";


const initState:PageResponse<Todo> = {
    dtoList: [],
    total:0,
    size: 0,
    end : 0,
    next: false,
    prev: false,
    page: 0,
    start: 0
}


function TodoList() {

    const [data, setData] = useState<PageResponse<Todo>>(initState)

    const [page, setPage] = useState<number>(1)

    useEffect(() => {

        getTodoList(page).then(result => {

            setData(result)

        })

    }, [ page ]) //의존성 조건

    //빈 배열  - 한 번만 호출할 때 사용
    // 배열의 내용물이 기존과 달라지는 경우에 함수가 자동으로 호출

    return (
        <div>
            <h1 onClick={() => {

                setPage(page + 1)

            }}>Todo List  {page}</h1>

            <ul>

                {data.dtoList.map( todo =>
                    <li key={todo.tno}> {todo.tno}  -- {todo.title} -- {todo.writer} </li> )}

            </ul>

        </div>
    );
}

export default TodoList;