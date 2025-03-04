import { ChangeEvent, useState } from "react";
import { postTodo } from "../../apis/todoApi.tsx";

const initState: Todo = {
    title: '',
    writer: ''
};

interface TodoAddProps {
    changeKey: () => void;
}

function TodoAdd({ changeKey }: TodoAddProps) {

    const [todoAdd, setTodoAdd] = useState(initState);
    const [fetching, setFetching] = useState(false);
    const [result, setResult] = useState(0);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTodoAdd({ ...todoAdd, [name]: value });
    };

    const handleClick = () => {
        setFetching(true);
        setTimeout(() => {
            postTodo(todoAdd).then(tnoResult => {
                setFetching(false);
                setResult(tnoResult);
                changeKey();
            });
        }, 1000);
    };

    return (
        <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Todo Add</h1>

            {result !== 0 && <h2 className="text-xl text-green-500 mb-4 text-center">RESULT: {result}</h2>}

            {fetching && <h3 className="text-lg text-blue-500 text-center mb-4">등록중...</h3>}

            <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700 mb-2">Title</label>
                <input
                    type="text"
                    name="title"
                    value={todoAdd.title}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
            </div>

            <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700 mb-2">Writer</label>
                <input
                    type="text"
                    name="writer"
                    value={todoAdd.writer}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
            </div>

            <div className="text-center">
                <button
                    onClick={handleClick}
                    className="w-full p-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-300"
                >
                    SEND
                </button>
            </div>
        </div>
    );
}

export default TodoAdd;
