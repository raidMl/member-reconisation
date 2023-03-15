import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import React from "react";
import axios from "axios"
const initialState={
    items:[],
    status:null,
    error:null 
}

//create an action creator 
export const usersFetch=createAsyncThunk(
    "users/usersFetch",
   
    async(id=null,{rejectWithValue})=> {
    try{
    const res=await axios.get("http://localhost:5000/users")
    return res?.data  //if there is error don't show
    }
    catch(error){
        return rejectWithValue("error occured");
    } 
}
)
const usersSlice=createSlice({
    name:"users",
    initialState,
    reducers:{},
    extraReducers:{
              [usersFetch.pending]:(state,action)=>{ state.status="prending"},
              [usersFetch.fulfilled]:(state,action)=>{ state.status="success"
             state.items=action.paylod},
              [usersFetch.rejected]:(state,action)=>{ state.status="rejected"}


                  }

          
                })

export default usersSlice.reducer;
