import {createSlice} from "@reduxjs/toolkit";


export interface CountState {
    count: number
}

const initState: CountState = {
    count: 12
}

const countSlice = createSlice({
    name: 'countSlice',
    initialState: initState,
    reducers: {
        inc: (state, action): CountState => {
            return {count: state.count + action.payload }
        },
        dec: (state, action): CountState => {
            return {count: state.count - action.payload }
        }
    }
})

export const {inc,dec} = countSlice.actions
export default countSlice.reducer
