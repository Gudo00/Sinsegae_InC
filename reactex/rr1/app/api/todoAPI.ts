import axios from "axios";
import type {ActionResult} from "~/types/common";
import jwtAxios from "~/util/jwtUtil";


const host = "http://localhost:8080/api/v1/todos";

export async function testTodoList(page:string, size:string) {

    const res = await jwtAxios.get(`${host}/list?page=${page}&size=${size}`);

    return res.data
}

export async function testTodoAdd(todo:TodoAdd):Promise<ActionResult<number>> {

    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(todo);

    return {result:'success', data: 123}

}

export async function testTodoAddForm(formData:FormData):Promise<ActionResult<number>> {

    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(formData)

    const res = await axios.post(`${host}`, formData);

    console.log(res)

    return res.data

}






