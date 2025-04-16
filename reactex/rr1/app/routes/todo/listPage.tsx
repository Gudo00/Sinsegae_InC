import React from 'react';
import TodoListComponent from "~/components/todo/listComponent";
import {useCountStore} from "~/store/useCountStore";

function TodoListPage() {

    const { count, inc } = useCountStore()

    return (
        <div>
            <div className={'text-4xl'}>Todo List Page</div>

            <span>{count}</span>
            <button onClick={inc}>one up</button>

            <TodoListComponent></TodoListComponent>

        </div>
    );
}

export default TodoListPage;