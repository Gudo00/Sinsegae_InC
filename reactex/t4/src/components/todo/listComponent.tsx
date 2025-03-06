import { useEffect, useState } from "react";
import { getTodoList } from "../../api/todoApi.tsx";
import LoadingComponent from "../common/loadingComponent.tsx";
import PageComponent from "../common/pageComponent.tsx";
import useCustomMove from "../../hooks/useCustomMove.tsx";

const initState:PageResponse<Todo> = {
    dtoList: [],
    total:0,
    size: 0,
    end : 0,
    next: false,
    prev: false,
    page: 0,
    start: 0
}

function ListComponent() {
    const [serverData, setServerData] = useState(initState);
    const { loading, setLoading, refresh, page, size, moveListPage, moveRead } = useCustomMove();

    useEffect(() => {
        setLoading(true);
        // setTimeout(() => {
            getTodoList(page, size).then(data => {
                setServerData(data);
                setLoading(false);
            });
        // }, 250);
    }, [page, size, refresh]);

    return (
        <div className="bg-black min-h-screen py-10">
            <LoadingComponent isLoading={loading} />

            <div className="text-center text-3xl font-bold text-white mb-6">
                ⚡ Todo List ⚡
            </div>

            <div className="w-full max-w-3xl mx-auto bg-gray-900 shadow-2xl rounded-xl p-6">
                <ul className="space-y-4">
                    {serverData.dtoList.map(todo => (
                        <li
                            key={todo.tno}
                            className="flex justify-between items-center p-4 border-b last:border-none
                            text-white hover:bg-gray-700 cursor-pointer"
                            onClick={() => moveRead(todo.tno || 0)}
                        >
                            <span className="font-medium">{todo.tno}</span>
                            <span>{todo.title}</span>
                            <span>{todo.writer}</span>
                            <span className="text-sm">{todo.regDate}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-8">
                <PageComponent serverData={serverData} moveListPage={moveListPage} />
            </div>
        </div>
    );
}

export default ListComponent;
