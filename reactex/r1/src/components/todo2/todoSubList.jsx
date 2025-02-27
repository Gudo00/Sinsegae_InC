import TodoItem from "./todoItem.jsx";
import {useState} from "react";
import Modal from "./Modal.jsx";


function TodoSubList({arr, removeTodo,updateTodo}) {

    const [current,setCurrent] = useState(null)

    const showModal = (selectedTodo)=> {
        console.log(selectedTodo)
        setCurrent(selectedTodo)
    }

    return (
        <div className={'p-3 bg-amber-200 h-full'}>
            <div>Todo Sub List</div>
            <ul>
                {arr.map( todo =>
                    <TodoItem key={todo.tid} todo={todo} showModal={showModal}></TodoItem>
                )}
            </ul>

            {current &&
                <Modal todo={current}
                       removeTodo ={removeTodo}
                       updateTodo = {updateTodo}
                       onClose={() => setCurrent(null) }>
                </Modal>
            }

        </div>
    );
}

export default TodoSubList;