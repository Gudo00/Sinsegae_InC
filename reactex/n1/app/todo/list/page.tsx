

import {TodoListComponent} from "@/app/components/todo/listComponent";

export const dynamic = 'force-dynamic';

export interface PageProps {
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

async function TodoListPage({searchParams}: {searchParams:Promise<any>} ) {


    const search = await searchParams

    console.log(search)

    const page = search['page'] || "1"
    const size = search['size'] || "10"

    const query = new URLSearchParams({page,size}).toString()

    const data = await fetch(`http://localhost:8080/api/todo/list?${query}`)

    console.log(data)

    const serverData = await data.json()

    return (
        <div>
            <div className={'text-4xl'}>Todo List Page</div>

            {serverData &&
                <TodoListComponent serverData={serverData}/>
            }
        </div>
    )

}

export default TodoListPage