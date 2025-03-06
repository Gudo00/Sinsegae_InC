import { useState } from "react";
import { postTodo } from "../../api/todoApi.tsx";
import useCustomMove from "../../hooks/useCustomMove.tsx";
import LoadingComponent from "./loadingComponent.tsx";
import ResultComponent from "./resultComponent.tsx";

function AddComponent() {

    const [todo, setTodo] = useState<Todo>({title:'',writer:''})

    const { moveListPage , loading, setLoading, oper, setOper } = useCustomMove()


    const handleClick = () => {

        setLoading(true)

        postTodo(todo).then(todoNum => {
            setLoading(false)
            setOper(`New Todo ${todoNum} Added`)

        })
    }

    const closeFn = () => {
        moveListPage(1)
    }

    return (
        <div className="max-w-lg mx-auto p-6 bg-neutral-900 shadow-2xl rounded-xl text-white border border-gray-700">
            {oper && <ResultComponent msg={oper} closeFn={closeFn}></ResultComponent>}
            <LoadingComponent isLoading={loading}/>

            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-yellow-400">📌</span> Todo ADD Component
            </h2>

            <div className="space-y-5">
                {/* 제목 입력 필드 */}
                <div>
                    <label className="block text-sm font-medium text-gray-300">제목</label>
                    <input
                        type="text"
                        value={todo.title}
                        className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400 outline-none"
                        onChange={(e) => {
                            todo.title = e.target.value;
                            setTodo({ ...todo });
                        }}
                    />
                </div>

                {/* 작성자 입력 필드 */}
                <div>
                    <label className="block text-sm font-medium text-gray-300">작성자</label>
                    <input
                        type="text"
                        value={todo.writer}
                        className="w-full p-3 rounded-md bg-gray-800 text-white border
                        border-gray-600 focus:ring-2focus:ring-yellow-400 outline-none"
                        onChange={(e) => {
                            todo.writer = e.target.value;
                            setTodo({ ...todo });
                        }}
                    />
                </div>

                {/* 버튼 */}
                <div className="flex justify-end space-x-4">
                    <button
                        className="px-6 py-3 rounded-lg bg-yellow-500 hover:bg-yellow-400
                        text-black font-semibold shadow-md transition-all"
                        onClick={handleClick}
                    >ADD</button>
                </div>
            </div>
        </div>
    );
}

export default AddComponent;
