import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsList = createAsyncThunk('getProductsListThunk', async () => {

    const res = await axios.get("http://122.34.51.94:8090/api/products/list")

    return res.data
})

const productsSlice = createSlice({
    name: "productsSlice",
    initialState: { dtoList:[] },
    reducers: {

    },
    extraReducers:(builder) => {
        builder
            .addCase(getProductsList.pending, () => {
                console.log("pending............")
            })
            .addCase(getProductsList.fulfilled, (state, action) => {
                console.log("fulfilled...............")

                return action.payload
            })
    }
})

export default productsSlice.reducer