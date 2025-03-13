import {create} from "zustand";


const useCouterStore = create( (set) => ({

    count: 123,

    inc: (amount) => set( (state) => {
        return {count: state.count + amount  }
    } ),

    dec: (amount) => set( (state) => {
        return {count: state.count - amount }
    } ),

    makeDouble: () => set( (state) => {
        return {count: state.count * 2}
    })

}))

export default useCouterStore