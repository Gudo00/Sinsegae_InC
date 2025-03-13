import {create} from "zustand";
import {getCookie, removeCookie, setCookie} from "../util/cookieUtil.tsx";


export interface LoginState {

    user: string,
    login: (username:string) => void,
    logout: () => void
}

// 알잘딱해서 쓰기
const useLoginStore =
    create<LoginState>( set => ({
        user: (getCookie('user') as string || ''),
        login: (username) => {

            setCookie("user", username, 1)

            set(() =>  ({user: username}))

        },
        logout: () => {
            removeCookie("user")
            set(() => ({user: ''}))
        }
    }) )

export default useLoginStore