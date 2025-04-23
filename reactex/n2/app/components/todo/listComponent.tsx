import PagingComponent from "@/app/components/common/pagingComponent";


export const TodoListComponent = ({serverData}:{serverData:PageResponse<Todo>}) => {


    const tasks = serverData.dtoList

    return (
        <div className='p-6 mt-6'>
            <div className={'text-2xl'}>Todo List Component</div>

            <ul className="space-y-3">
                {tasks.map((task) => (
                    <li
                        key={task.tno}
                        className="border rounded-md p-2 shadow-sm flex flex-col sm:flex-row sm:justify-between sm:items-center bg-white hover:bg-gray-50 transition"
                    >
                        <div>
                            <div className="text-lg font-semibold text-gray-800">{task.tno}</div>
                            <div className="text-lg font-semibold text-gray-800">{task.title}</div>
                            <p className="text-sm text-gray-600">
                                작성자: {task.writer} | 마감일: {task.dueDate}
                            </p>
                        </div>
                        <div className="mt-2 sm:mt-0">
                            {task.complete ? (
                                <span className="px-3 py-1 text-sm font-medium text-green-700 bg-green-100 rounded-full">
                완료됨
              </span>
                            ) : (
                                <span className="px-3 py-1 text-sm font-medium text-yellow-700 bg-yellow-100 rounded-full">
                진행 중
              </span>
                            )}
                        </div>
                    </li>
                ))}
            </ul>

            <PagingComponent serverData={serverData}/>
        </div>
    )
}