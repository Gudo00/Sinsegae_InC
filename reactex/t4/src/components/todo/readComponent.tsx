import { useEffect, useState } from "react";
import { getTodo } from "../../api/todoApi.tsx";
import LoadingComponent from "../common/loadingComponent.tsx";
import useCustomMove from "../../hooks/useCustomMove.tsx";

const initState: Todo = {
    tno: 0,
    title: "",
    writer: "",
    regDate: "",
    modDate: ""
}

function ReadComponent() {
    const [todo, setTodo] = useState<Todo>(initState);
    const { tno, loading, setLoading, moveToModify, moveToList } = useCustomMove();

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            getTodo(tno)
                .then((data) => {
                    setTodo(data);
                    setLoading(false);
                })
                .catch((error) => console.error("Error fetching todo:", error));
        }, 250);
    }, [tno]);

    return (
        <div className="max-w-lg mx-auto p-6 bg-neutral-900 shadow-2xl rounded-xl text-white border border-gray-700">
            <LoadingComponent isLoading={loading} />

            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-yellow-400">📌</span> Todo Read Component
            </h2>

            <div className="space-y-5">
                {/** 번호 */}
                <div>
                    <label className="block text-sm font-medium text-gray-300">번호</label>
                    <input
                        type="text"
                        value={todo.tno}
                        readOnly
                        className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600"
                    />
                </div>

                {/** 제목 */}
                <div>
                    <label className="block text-sm font-medium text-gray-300">제목</label>
                    <input
                        type="text"
                        value={todo.title}
                        readOnly
                        className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600"
                    />
                </div>

                {/** 작성자 */}
                <div>
                    <label className="block text-sm font-medium text-gray-300">작성자</label>
                    <input
                        type="text"
                        value={todo.writer}
                        readOnly
                        className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600"
                    />
                </div>

                {/** 등록일 */}
                <div>
                    <label className="block text-sm font-medium text-gray-300">등록일</label>
                    <input
                        type="text"
                        value={todo.regDate}
                        readOnly
                        className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600"
                    />
                </div>

                {/** 수정일 */}
                <div>
                    <label className="block text-sm font-medium text-gray-300">수정일</label>
                    <input
                        type="text"
                        value={todo.modDate}
                        readOnly
                        className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600"
                    />
                </div>

                {/** 버튼 영역 */}
                <div className="flex justify-end space-x-4">
                    <button
                        className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-md transition-all"
                        onClick={moveToList}
                    >
                        List
                    </button>
                    <button
                        className="px-6 py-3 rounded-lg bg-green-500 hover:bg-green-400 text-black font-semibold shadow-md transition-all"
                        onClick={() => moveToModify(todo.tno)}
                    >
                        Modify
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ReadComponent;
