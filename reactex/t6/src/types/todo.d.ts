
interface TodoListDTO {

    tno: number,
    title: string,
    writer: string,
    complete: boolean,
    dueDate: string | null
}

interface TodoAdd {
    title: string,
    writer: string,
    dueDate: string
}