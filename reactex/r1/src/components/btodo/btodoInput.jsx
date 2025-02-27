import { useState } from "react";

function BtodoInput({ addTodo }) {
    const [title, setTitle] = useState("");

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
                <h2 className="text-xl font-bold text-gray-700 mb-4">Todo 추가</h2>
                <div>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="추가할 Todo를 입력하세요..."
                        className="w-full p-3 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 transition duration-300"
                    />
                    <button
                        onClick={() => {
                            addTodo(title);
                            setTitle('');
                        }}
                        className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition duration-300"
                    >
                        저장
                    </button>

                </div>
            </div>
        </div>
    );
}

export default BtodoInput;
