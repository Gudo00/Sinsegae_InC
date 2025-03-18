import axios from "axios";


export async function getTodoList(page:string|number, size:string|number) {

    const res =
        await axios.get(`http://122.34.51.94:8090/api/todo/list?page=${page}&size=${size}`)

    return res.data
}

export async function postTodo( todo:TodoAdd ) {

    const res = await axios.post(`http://122.34.51.94:8090/api/todo/`, todo)

    return res.data
}