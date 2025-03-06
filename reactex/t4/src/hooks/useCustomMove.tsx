import {useLocation, useNavigate, useParams, useSearchParams} from "react-router";
import {useState} from "react";


export default function useCustomMove () {

    const [searchParams] = useSearchParams()

    const pageStr:string | null = searchParams.get("page")
    const page: number = !pageStr ? 1 : Number(pageStr)

    const sizeStr:string | null = searchParams.get("size")
    const size: number = !sizeStr ? 10 : Number(sizeStr)


    const [loading, setLoading] = useState(false)
    const [refresh, setRefresh] = useState(false)

    const [oper, setOper] = useState('')

    const navigate = useNavigate()
    const location = useLocation()


    const params = useParams(); // useParams에서 가져옴

    const tnoStr = params.tno

    const tno =  Number(tnoStr)

    const moveListPage = (pageParam:number) => {
        //주소창의 page값
        console.log(page , pageParam)
        //동일한 페이지를 호출한다면
        if (page === pageParam) {
            setRefresh(prev => !prev);
        }
        navigate(`/todo/list?page=${pageParam}&size=${size}`)
    }

    const moveRead  = (tno:number|string) => {

        navigate(`/todo/read/${tno}?page=${page}&size=${size}`)
    }

    const moveToList = () => {
        navigate(`/todo/list${location.search}`)
    }

    const moveToModify = (tno:number|unknown) => {

        // /todo/modify/33?page=3&size=10

        navigate(`/todo/modify/${tno}${location.search}`)
    }


    return {tno, loading,setLoading, refresh, page,size, oper,setOper, moveListPage, moveRead, moveToList,moveToModify}



}