

function TodoReadComponent({todo}:{todo:Todo}) {

    return (
        <div
            className={`max-w-md mx-auto p-6 rounded-lg shadow-md border ${
                todo.complete ? 'bg-green-100 border-green-300' : 'bg-white border-gray-200'
            }`}
        >
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">{todo.title}</h2>
                <span
                    className={`text-sm font-semibold px-3 py-1 rounded-full ${
                        todo.complete
                            ? 'bg-green-200 text-green-800'
                            : 'bg-yellow-200 text-yellow-800'
                    }`}
                >
                    {todo.complete ? '완료' : '진행 중'}
                </span>
            </div>
            <p className="text-gray-700 mb-2">
                <strong>작성자:</strong> {todo.writer}
            </p>
            <p className="text-gray-700">
                <strong>마감일:</strong> {todo.dueDate}
            </p>
        </div>
    );

}

export default TodoReadComponent