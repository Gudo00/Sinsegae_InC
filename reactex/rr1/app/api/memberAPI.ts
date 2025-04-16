import axios from "axios";

const host = "http://localhost:8080/api/v1/member/login";


export const getToken = async (mid:string, mpw:string) => {

    const header = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }

    const res = await axios.post(`${host}`,{uid:mid, upw:mpw}, header);

    console.log(res.data)

    return res.data

}
