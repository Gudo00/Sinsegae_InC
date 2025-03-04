
import './App.css'

import TodoAdd from "./components/todo/todoAdd.tsx";
import TodoList from './components/todo/todoList.tsx';
import {useState} from "react";

function App() {

    const [key, setKey] = useState(1)

    const changeKey = () => {
        setKey(key + 1)
    }

    //const todo:Todo = {title: "React로 생성하는 Todo !", writer:"Gudo"}

    // postTodo(todo).then((result:number) => {
    //     console.log(result)
    // })


    // updateTodo(251, "React Update 251").then((result:Todo)=> {
    //     console.log(result)
    // })

    // getTodoList(2,50).then((result: PageResponse<Todo>) => {
    //
    //     console.log(result.total)
    //
    // })

    // getTodo(25144).then( (result: Todo) => {
    //
    //     console.log(result)
    //
    // } ).catch( reason =>  {
    //
    //     console.log(reason)
    //
    // } )

    return (
        <>
            <TodoAdd changeKey = {changeKey}/>
            <TodoList key = {key}></TodoList>
        </>
    )
}

export default App