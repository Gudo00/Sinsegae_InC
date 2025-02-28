
interface TodoListProps {
    arr: Todo[],
    remove: (tid:string) => void
}

function TodoList({arr, remove}:TodoListProps) {

    console.log(arr)

    return (
        <ul>
            {arr.map(todo =>
                <li key={todo.tid}>
                    {todo.title}
                    <div onClick={() => {
                        remove(todo.tid)
                    }} >DELETE</div>
                </li>
            )}
        </ul>
    );
}

export default TodoList;