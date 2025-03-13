import {configureStore} from "@reduxjs/toolkit";
import countSlice from "./slices/countSlice.tsx";
import loginSlice from "./slices/loginSlice.tsx";


export const store = configureStore({
    reducer: {
        countSlice: countSlice,
        loginSlice: loginSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store