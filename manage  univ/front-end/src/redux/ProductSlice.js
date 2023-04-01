import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import React from "react";
import axios from "axios"
const initialState = {
    items: [],
    status: null,
    error: null
}

//create an action creator 
export const usersFetch = createAsyncThunk(
    "users/usersFetch",

    async (id = null, { rejectWithValue }) => {
        try {
            const res = await axios.get("http://localhost:5000/user")
            return res?.data  //if there is error don't show

        }
        catch (error) {
            return rejectWithValue("error occured");
        }
    }
)

export const userFetch = createAsyncThunk(
    "user/userFetch",

    async (id = null, { rejectWithValue }) => {
        try {
            const res = await axios.get("http://localhost:5000/user/:id")
            return res?.data  //if there is error don't show
        }
        catch (error) {
            return rejectWithValue("error occured");
        }
    }
)

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: {
        [usersFetch.pending]: (state, action) => { state.status = "pending" },
        [usersFetch.fulfilled]: (state, action) => {
            state.status = "success"
            state.items = action.paylod
        },
        [usersFetch.rejected]: (state, action) => { state.status = "rejected" },
//get one user
        [userFetch.pending]: (state, action) => { state.status = "pending" },
        [userFetch.fulfilled]: (state, action) => {
            state.status = "success"
            state.items = action.paylod
        },

        [userFetch.rejected]:(state,action)=>{ state.status="rejected"}

    }



})

export default usersSlice.reducer;
