
"use client"



import {useActionState, useEffect} from "react";
import {loginServerAction} from "@/app/member/memberActions";
import Link from "next/link";
import {useLoginStore} from "@/store/useLoginStore";

const initState: MemberInfo = {
    mid:'',
    accessToken:'',
    refreshToken:''
}

async function loginAction(state:MemberInfo, formData:FormData) {

    console.log("login action",state)

    return loginServerAction()


}


function LoginPage() {

    const [state,action, isPending] = useActionState(loginAction, initState);

    const {save} = useLoginStore()

    useEffect(()=>{

        console.log("access Token changed............" + state.accessToken)

        if(state.accessToken) {

            save(state.mid, state.accessToken, state.refreshToken)

        }


    },[state.accessToken])


    return (
        <div>

            {isPending && <div className={'bg-blue-600'}>로그인 중.................</div>}

            {state.accessToken && <div className={'bg-amber-600'}>로그인 완료되었음</div>}
            
            <div>Login Page</div>
            <form action={action}>
                <button type={"submit"}>Login</button>
            </form>

            <div>

                <Link href={'/member/mypage'}>MyPage</Link>
            </div>

        </div>
    )
}

export default LoginPage;