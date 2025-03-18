
import TopMenuComponent from "../../components/menu/topMenuComponent.tsx";
import {useQuery} from "@tanstack/react-query";
import {getTodoList} from "../../api/todoApi.tsx";
import {useSearchParams} from "react-router";




function ListPage() {

    const [search] = useSearchParams()

    const pageStr = search.get("page") || "1"
    const sizeStr = search.get("size") || "10"


    //일반적인 경우에는 isFetching으로 처리
    const  {isFetching, data} = useQuery<PageResponseDTO<TodoListDTO>>({
        queryKey: ['todo/list', {page:pageStr, size:sizeStr}],
        queryFn: () => getTodoList(pageStr,sizeStr),
        staleTime: 1000 * 60
    })


    return (
        <div>

            {isFetching && <h1>Loading.........</h1>}

            <TopMenuComponent></TopMenuComponent>
            <div>Todo List Page</div>

            <ul>
                {data?.dtoList?.map(todo =>
                    <li key={todo?.tno}>
                        {todo.tno} - {todo.title}
                    </li>
                )}
            </ul>

        </div>
    );
}

export default ListPage;
