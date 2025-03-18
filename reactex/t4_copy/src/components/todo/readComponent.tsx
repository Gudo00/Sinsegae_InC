import useCustomRead from "../../hooks/useCustomRead.tsx";
import LoadingComponent from "../common/loadingComponent.tsx";


function ReadComponent() {


    const {todo, moveList, loading, moveRead} = useCustomRead()


    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">

            <LoadingComponent isLoading={loading}/>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">📌 Todo Read Component</h2>

            <div className="space-y-3">
                <div>
                    <label className="block text-gray-600 text-sm font-medium">번호</label>
                    <input type="text"  readOnly value={todo.tno}
                           className="w-full p-2 border rounded bg-gray-100 text-gray-700"/>
                </div>

                <div>
                    <label className="block text-gray-600 text-sm font-medium">제목</label>
                    <input type="text"  readOnly value={todo.title}
                           className="w-full p-2 border rounded bg-gray-100 text-gray-700"/>
                </div>

                <div>
                    <label className="block text-gray-600 text-sm font-medium">작성자</label>
                    <input type="text"  readOnly value={todo.writer}
                           className="w-full p-2 border rounded bg-gray-100 text-gray-700"/>
                </div>

                <div>
                    <label className="block text-gray-600 text-sm font-medium">등록일</label>
                    <input type="text" readOnly value={todo.regDate}
                           className="w-full p-2 border rounded bg-gray-100 text-gray-700"/>
                </div>

                <div>
                    <label className="block text-gray-600 text-sm font-medium">수정일</label>
                    <input type="text" readOnly value={todo.modDate}
                           className="w-full p-2 border rounded bg-gray-100 text-gray-700"/>
                </div>
                <div className="flex justify-end space-x-4">
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                        onClick={moveList}
                    >List</button>
                    <button
                        className="px-4 py-2 bg-green-500 text-white rounded"
                        onClick={() => moveRead(todo.tno,'modify')}
                    >Modify</button>
                </div>
            </div>
        </div>
    );
}

export default ReadComponent;
