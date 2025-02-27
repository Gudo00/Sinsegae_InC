import { useState } from "react";
import BtodoList from "./btodoList.jsx";
import BtodoInput from "./btodoInput.jsx";
import BtodoMod from "./btodoMod.jsx";
import { v4 as uuidv4 } from "uuid";

function BtodoContainer() {
    const [oper, setOper] = useState('L');
    const [arr, setArr] = useState([]);
    const [current, setCurrent] = useState(null);

    function addTodo(title) {
        const newTodo = { tid: uuidv4(), title: title };
        setArr([...arr, newTodo]);
        setOper('L');
    }

    function removeTodo(tid) {
        const filteredArr = arr.filter(todo => todo.tid !== tid);
        setArr(filteredArr);
        setCurrent(null);
    }

    function updateTodo(tid, title) {
        const targetTodo = arr.filter(todo => todo.tid === tid)[0];
        targetTodo.title = title;
        setArr([...arr]);
        setCurrent(null);
    }

    function showMod(tid) {
        const currentTodo = arr.filter(todo => todo.tid === tid)[0];
        setCurrent(currentTodo);
    }

    function hideMod() {
        setCurrent(null);
    }

    return (
        <div className="w-full h-full bg-gradient-to-r from-cyan-300 to-teal-400 min-h-screen p-6 rounded-lg shadow-xl">
            <h1 className="text-2xl font-bold text-white mb-4">B Todo 컨테이너</h1>
            <button
                onClick={() => setOper('I')}
                className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300"
            >
                Todo 추가
            </button>

            <BtodoList showMod={showMod} arr={arr} />

            {oper === 'I' && (
                <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
                    <BtodoInput
                        addTodo={addTodo}
                    />
                </div>
            )}

            {current !== null && (
                <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
                    <BtodoMod
                        current={current}
                        removeTodo={removeTodo}
                        updateTodo={updateTodo}
                        hideMod={hideMod}
                    />
                </div>
            )}
        </div>
    );
}

export default BtodoContainer;
