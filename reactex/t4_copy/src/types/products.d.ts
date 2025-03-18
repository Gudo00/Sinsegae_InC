interface ProductListDTO {
    pno: number,
    pname: string,
    price:number,
    pdesc: string,
    delFlag: boolean,
    files: string[],
    uploadFileNames: string[]
}

interface ProductAdd {
    pname: string,
    pdesc: string,
    price: number
}

