

interface Todo {
    tno: number,
    title: string,
    writer: string,
    regDate? : Date | null,
    modDate? : Date | null
}

interface TodoAdd {
    title: string,
    writer: string,
}