import {useActionState, useState} from "react";
import {postTodo} from "../../apis/todoApi.tsx";


async function submitAction (prevState:number , formData:FormData):Promise<number> {

    const titleStr:FormDataEntryValue|null = formData.get('title')
    const writerStr:FormDataEntryValue|null = formData.get('writer')

    console.log(prevState)

    const todoObj: Todo  = {
        title: (titleStr) ? String(titleStr) : '',
        writer:(writerStr) ? String(writerStr) : '', }

    return postTodo(todoObj)
}

function TodoAdd2() {


    const [todo, setTodo] = useState({title:'', writer:''})

    //처음 state 초기값
    //state는 나중에 formAction의 리턴값
    //isPending은 실행 중이라는 표시

    //1단계 전송 테스트
    //2단계 입력값 수집
    //3단계 입력값 change
    const [state, formAction, isPending] = useActionState(submitAction, 0)

    console.log("Component State : " + state)


    return (
        <div>
            <h1>Todo Add 2</h1>

            {isPending && <h1>Pending...............</h1>}

            {state !== 0 && <h1>RESULT : {state}</h1> }

            <form action={formAction}>
                <div>
                    <input type={'text'} name={'title'}
                           value={todo.title}
                           onChange={e => {
                               todo.title = e.target.value
                               setTodo({...todo})
                           }}
                    />
                </div>

                <div>
                    <input type={'text'} name={'writer'}
                           value={todo.writer}
                           onChange={e => {
                               todo.writer = e.target.value
                               setTodo({...todo})
                           }}
                    />
                </div>
                <button>SUBMIT</button>
            </form>
        </div>
    );
}

export default TodoAdd2;