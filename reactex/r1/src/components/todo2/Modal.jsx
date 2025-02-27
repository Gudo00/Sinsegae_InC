import {useState} from "react";


const Modal = ({ todo, removeTodo, updateTodo, onClose }) => {

    const [title, setTitle] = useState(todo.title)

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            style={{ backgroundColor: 'rgba(169, 169, 169, 0.7)' }}
            onClick={onClose}
        >
            <div
                className="bg-white p-6 rounded-lg shadow-lg w-96"
                onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫히지 않도록 방지
            >

                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    ✖
                </button>
                <h2 className="text-xl font-bold mb-4 ">모달 제목</h2>
                <p><input
                    type={'text'}
                    value={title}
                    className={'p-2 border-2'}
                    onChange={(e) => { setTitle(e.target.value)  }}
                /></p>

                <button
                    className="mt-4 px-4 m-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                    onClick={() => {
                        updateTodo(todo.tid, title)
                        onClose()
                    }}
                >
                    MODIFY
                </button>

                <button
                    className="mt-4 px-4 m-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                    onClick={() => {
                        removeTodo(todo.tid)
                        onClose()
                    }}
                >
                    DELETE
                </button>

                <button
                    className="mt-4 px-4 py-2 m-3 bg-red-600 text-white rounded-md hover:bg-red-700"
                    onClick={() => onClose()}
                >
                    닫기
                </button>
            </div>
        </div>
    );
};

export default Modal