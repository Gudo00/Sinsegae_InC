import TodoInput from "./todoInput.jsx";
import TodoSubList from "./todoSubList.jsx";
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

// 컨테이너
// 공유 데이터, 매니저 역학
function TodoContainer() {


    const [arr, setArr] = useState([])

    //기능
    const addText = (text) => {

        const obj = {tid: uuidv4() , title:text }

        setArr([...arr,obj])
    }

    const removeTodo = (tid) => {

        const result = arr.filter(todo => todo.tid !== tid)

        setArr(result)
    }

    const updateTodo = (tid, title) => {

        const tempArr = arr.filter(todo => todo.tid === tid)

        if(tempArr.length == 0){
            return
        }

        const targetTodo = tempArr[0]
        targetTodo.title = title

        setArr([...arr])

    }



    return (
        <div className={'w-full bg-blue-300 p-5'}>
            <div>Todo Container</div>

            <TodoInput addText = {addText} ></TodoInput>
            <TodoSubList arr={arr}
                         removeTodo={removeTodo}
                         updateTodo={updateTodo}>

            </TodoSubList>
        </div>
    );
}

export default TodoContainer;