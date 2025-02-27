import { useState } from "react";

function BtodoMod({ current, removeTodo, updateTodo, hideMod }) {
    const [titleStr, setTitleStr] = useState(current.title);

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            style={{ backgroundColor: 'rgba(169, 169, 169, 0.7)' }}
            onClick={() => {}}
        >
            <div
                className="bg-white p-6 rounded-lg shadow-lg w-96"
                onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫히지 않도록 방지
            >
                <h2 className="text-xl font-semibold text-gray-700 mb-4">수정 / 삭제</h2>

                <div className="text-sm text-gray-500 mb-4">
                    <p><strong>ID:</strong> {current.tid}</p>
                </div>

                <div className="mb-4">
                    <input
                        type="text"
                        value={titleStr}
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        onChange={(e) => setTitleStr(e.target.value)}
                    />
                </div>

                <div className="flex justify-between mt-6">
                    <button
                        onClick={() => updateTodo(current.tid, titleStr)}
                        className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition duration-300"
                    >
                        수정
                    </button>
                    <button
                        onClick={() => removeTodo(current.tid)}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                    >
                        삭제
                    </button>
                    <button
                        onClick={() => hideMod()}
                        className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
                    >
                        취소
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BtodoMod;
