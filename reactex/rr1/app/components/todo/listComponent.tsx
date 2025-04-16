import {useQuery} from "@tanstack/react-query";
import {testTodoList} from "~/api/todoAPI";
import {Navigate, useSearchParams} from "react-router";


function TodoListComponent () {

    const [searchParams] = useSearchParams();

    const pageStr = searchParams.get("page") || "1"
    const sizeStr = searchParams.get("size") || "10"

    console.log("pageStr: ", pageStr," sizeStr: ", sizeStr)

    // Queries
    const query = useQuery({
        queryKey: ['todos', pageStr, sizeStr],
        queryFn: () => testTodoList(pageStr, sizeStr),
        staleTime: 10 * 60 * 1000,
        retry: false//신선도 판단 기준
    })

    const {isFetching, data, error } = query

    if(error){
        return(
            <Navigate to="/member/login" replace />
        )
    }

    return (
        <div>
            <div className={'text-4xl'}>Todo List Component </div>
            <div className={'text-3xl bg-amber-600'}> {isFetching && <h1>Loading.........</h1>}</div>

            {data &&  <div className={'text-2xl'}>List 출력</div>}

        </div>
    )
}

export default TodoListComponent