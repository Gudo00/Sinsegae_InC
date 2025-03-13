import {create} from "zustand";

export interface CountState {
    num: number,
    inc: (amount:number) => void
}


const useCountStore =
    create<CountState>((set) => ({
        num: 0,
        inc: (amount:number) => set( (state) => {
            return {num: state.num + amount}
        })
    }))

export default useCountStore