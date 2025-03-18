import {useState} from "react";


export default function useCustomResult() {

    const [result, setResult] = useState(false)
    const [msg, setMsg] = useState('')


    const openModal = (str:string)=>  {

        setResult(true)
        setMsg(str)
    }


    const closeAction = (fn:() => void) => {

        setResult(false)
        fn()
    }


    return {result,  msg, openModal,  closeAction}
}
