import axios from "axios";

const HOST = import.meta.env.VITE_API_SERVER

console.log(HOST)

export async function getTodo( tno : number ):Promise<Todo> {
   // 예외처리
    try{
        // 응답
        const res = await axios.get(
            `${HOST}/${tno}`)
        return res.data
    }catch(err){
        console.log(err)
        throw Promise.reject("Data Not Found")
    }

}

export async function getTodoList(page : number = 1, size : number = 10):Promise<PageResponse<Todo>>{
    const param = {page : page, size : size}
    const res = await axios.get(
        `${HOST}/list`, {params : param})
    return res.data
}

export async function updateTodo ( tno: number, title: string):Promise<Todo> {
    // put, patch
    const res = await axios.put(
        `${HOST}/${tno}`, {title:title, tno:tno})

    return res.data
}

export async function deleteTodo(tno: number):Promise<void> {

    await axios.delete(`${HOST}${tno}`)
}

export async function postTodo(todo:Todo):Promise<number> {

    const res = await axios.post(
        `${HOST}`, todo)

    return res.data
}