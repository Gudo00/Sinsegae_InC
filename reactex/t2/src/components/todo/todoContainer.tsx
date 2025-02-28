import { useState} from "react";

import { v4 as uuidv4 } from 'uuid';
import TodoList from "./todoList.tsx";
import TodoInput from "./todoInput.tsx";

function TodoContainer() {

    const [todos, setTodos] = useState<Todo[]>([])

    const addTodo = (title:string) => {

        const obj = {tid: uuidv4() , title:title}

        setTodos([...todos, obj])
    }

    const removeTodo = (tid:string) => {

        const filteredResult =
            todos.filter( todo => todo.tid !== tid)

        setTodos(filteredResult)
    }

    console.log(addTodo, removeTodo)



    return (
        <div className={'w-full h-2/3 bg-fuchsia-200 border-1'}>

            <TodoInput addTodo={addTodo}></TodoInput>

            <div>
                <TodoList arr={todos} remove={removeTodo}></TodoList>
            </div>
        </div>
    );
}

export default TodoContainer;