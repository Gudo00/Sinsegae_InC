
"use client"



import {useActionState} from "react";
import {loginServerAction} from "@/app/member/memberActions";

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

    return (
        <div>
            <div>Login Page</div>
            <form action={action}>
                <button type={"submit"}>Login</button>
            </form>
        </div>
    )
}

export default LoginPage;