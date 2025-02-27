import {useState} from "react";
import BtodoList from "./btodoList.jsx";
import BtodoInput from "./btodoInput.jsx";
import BtodoMod from "./btodoMod.jsx";
import {v4 as uuidv4} from "uuid";

function BtodoContainer() {

    const [oper, setOper] = useState('L')

    const [arr, setArr] = useState([])

    const [current, setCurrent] = useState(null)

    function addTodo(title) {

        const newTodo = {tid: uuidv4(), title:title}

        setArr([...arr, newTodo])

        setOper('L')
    }

    function removeTodo(tid) {

        const filteredArr = arr.filter(todo => todo.tid !== tid)

        setArr(filteredArr)
        setCurrent(null)
    }

    function updateTodo(tid, title) {

        const targetTodo = arr.filter(todo => todo.tid === tid)[0]

        targetTodo.title = title

        setArr([...arr])
        setCurrent(null)
    }

    function showMod(tid) {

        const currentTodo = arr.filter(todo => todo.tid === tid)[0]

        setCurrent(currentTodo)
    }

    function hideMod(){
        setCurrent(null)
    }

    return (
        <div className={'w-full h-full bg-cyan-200 min-h-full'}>
            B Todo Containner <button onClick={() => setOper('I')}>ADD</button>

            <BtodoList showMod={showMod} arr={arr} ></BtodoList>


            {oper === 'I' &&
                <BtodoInput addTodo={addTodo}></BtodoInput>
            }

            {current !== null &&
                <BtodoMod current={current}
                          removeTodo={removeTodo}
                          updateTodo={updateTodo}
                          hideMod={hideMod}
                ></BtodoMod>
            }
        </div>
    );
}

export default BtodoContainer;