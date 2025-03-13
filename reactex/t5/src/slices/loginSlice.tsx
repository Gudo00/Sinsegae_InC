import {createSlice} from "@reduxjs/toolkit";

export interface LoginDTO {
    username: string
}

const initState: LoginDTO ={
    username:''
}

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: initState,
    reducers: {
        login: (state, action): LoginDTO => {

            const value = action.payload
            console.log(state)

            return {username: value}
        },
        logout: () => {

            return {username:''}
        }
    }
})

export const {login, logout} = loginSlice.actions

export default loginSlice.reducer