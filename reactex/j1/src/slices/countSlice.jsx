import {createSlice} from "@reduxjs/toolkit";


export const countSlice = createSlice({
    name: "countSlice",
    initialState: {num: 1},
    reducers: {
        inc: (state, action) => {
            console.log("inc " , action, action.payload)

            return {num: state.num + action.payload }
        },
        dec: (state, action) => {
            console.log("dec" , action, action.payload)

            return {num: state.num - action.payload }
        }
    }
})

export const { inc, dec } = countSlice.actions

export default countSlice.reducer
