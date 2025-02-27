import btodoMod from "./btodoMod.jsx";

function BtodoList({ showMod, arr }) {
    return (
        <div>
            <h2 className="text-xl font-bold text-gray-700 mb-4">B Todo List 🔥</h2>
            <ul>
                {arr.map(todo => (
                    <li key={todo.tid} className="flex justify-between items-center p-2 mb-2 bg-white rounded-lg shadow-md">
                        <span>{todo.title}</span>
                        <button
                            onClick={() => showMod(todo.tid)}
                            className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition duration-300"
                        >
                            편집
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BtodoList;
