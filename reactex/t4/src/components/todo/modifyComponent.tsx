import useCustomMove from "../../hooks/useCustomMove.tsx";
import { useEffect, useState } from "react";
import { deleteTodo, getTodo, updateTodo } from "../../api/todoApi.tsx";
import LoadingComponent from "../common/loadingComponent.tsx";
import ResultComponent from "../common/resultComponent.tsx";

const initState: Todo = {
    tno: 0,
    title: "",
    writer: "",
    regDate: "",
    modDate: "",
};

function ModifyComponent() {

    //현재 tno 번호
    const {tno, moveToList, loading,setLoading, moveRead, oper, setOper}  = useCustomMove()

    const [todo, setTodo] = useState<Todo>(initState)

    useEffect(() => {
        setLoading(true)

        getTodo(tno).then(data => {
            setTodo(data)
            setLoading(false)
        })

    }, [tno]);



    const handleClickDelete = ()=> {

        setLoading(true)

        deleteTodo(tno).then(() => {
            setLoading(false)
            setOper('D')
        })
    }

    const handleClickModify = () => {

        setLoading(true)

        updateTodo(tno, todo.title).then(() => {
            setLoading(false)
            setOper('M')
        })
    }

    const closeFn = () =>  {

        if(oper === 'M') {
            moveRead(tno)
        }else {
            moveToList()
        }

    }

    return (
        <div className="max-w-lg mx-auto p-6 bg-neutral-900 shadow-2xl rounded-xl text-white border border-gray-700">
            {oper && <ResultComponent msg={oper} closeFn={closeFn}></ResultComponent>}
            <LoadingComponent isLoading={loading}/>

            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-yellow-400">🛠️</span> Todo Modify Component
            </h2>

            <div className="space-y-5">
                {/** 번호 */}
                <div>
                    <label className="block text-sm font-medium text-gray-300">번호</label>
                    <input type="text" value={todo.tno} readOnly className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600" />
                </div>

                {/** 제목 */}
                <div>
                    <label className="block text-sm font-medium text-gray-300">제목</label>
                    <input
                        type="text"
                        value={todo.title}
                        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
                        className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/** 작성자 */}
                <div>
                    <label className="block text-sm font-medium text-gray-300">작성자</label>
                    <input type="text" value={todo.writer} readOnly className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600" />
                </div>

                {/** 등록일 */}
                <div>
                    <label className="block text-sm font-medium text-gray-300">등록일</label>
                    <input type="text" value={todo.regDate} readOnly className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600" />
                </div>

                {/** 수정일 */}
                <div>
                    <label className="block text-sm font-medium text-gray-300">수정일</label>
                    <input type="text" value={todo.modDate} readOnly className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600" />
                </div>

                {/** 버튼 영역 */}
                <div className="flex justify-end space-x-4">
                    <button className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-md transition-all" onClick={moveToList}>
                        List
                    </button>
                    <button className="px-6 py-3 rounded-lg bg-green-500 hover:bg-green-400 text-black font-semibold shadow-md transition-all" onClick={handleClickModify}>
                        Modify
                    </button>
                    <button className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold shadow-md transition-all" onClick={handleClickDelete}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModifyComponent;
