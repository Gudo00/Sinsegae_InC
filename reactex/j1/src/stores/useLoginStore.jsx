import {create} from "zustand";


const useLoginStore = create((set) => ({
    user: {uid:'', nickname:''},

    login: (text) => set((state) => {

        console.log("login....." + text)

        return {user: {uid:text, nickname:text}}

    }),

    logout: () => set(() => {
        return {user: {uid:'', nickname:''}}
    })

}))

export default useLoginStore