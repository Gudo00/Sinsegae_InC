import axios from "axios";

const HOST:string = import.meta.env.VITE_API_SERVER

export async function putProduct (formData:FormData) {

    const pno = formData.get("pno") as string

    const header = {headers: {"Content-Type": "multipart/form-data"}}

    const res = await axios.put(`${HOST}/products/${pno}`, formData, header)

    return res.data
}

export async function deleteProduct(pno:number|string)  {

   const res = await axios.delete(`${HOST}/products/${pno}`)

   return res.data
}

export async function postProduct(formData:FormData) {

    const header = {headers: {"Content-Type": "multipart/form-data"}}

    const res = await axios.post(`${HOST}/products/`, formData, header )

    return res.data
}

export async function getProductsList ( page:number = 1 , size: number = 10  ): Promise<PageResponse2<ProductListDTO>> {

    const param = {page:page, size:size}

    const res =
        await axios.get(`${HOST}/products/list`, {params: param})

    return res.data
}

export async function getProduct (pno: number | string): Promise<ProductListDTO> {

    const res =
        await axios.get(`${HOST}/products/${pno}`)

    return res.data
}

