import {createSlice} from "@reduxjs/toolkit";

const initState = {
    uid: ''
}

export const loginSlice = createSlice({
    name: "loginSlice",
    initialState: initState,
    reducers: {
        login: (state,action) => {
            console.log(state,action)

            return {uid: action.payload}
        },
        logout: (state,action) => {
            console.log(state, action)

            return {uid:''}
        }
    }
})

export const {login,logout} = loginSlice.actions
export default loginSlice.reducer

