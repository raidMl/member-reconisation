import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from './api'
import jwtDecode from 'jwt-decode'

const initialState =
{
    token: localStorage.getItem("token"),
    name: "",
    email: "",
    _id: "",
    role: "",
    faculty: "",
    image: "",
    registerStatus: "",
    registerError: "",
    loginStatus: "",
    loginError: "",
    userLoaded: false,
    isin: false
};
export const registerUser = createAsyncThunk(
    "auth/registerUser"
    , async (values, { rejectWithValue }) => {
        try {
            const token = await axios.post(`${url}/register`, { name: values.name, email: values.email, role: values.role, faculty: values.faculty, isin: false, password: values.password })
            localStorage.setItem("token", token.data)
            return token.data
        } catch (error) {
            console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    })
export const loginUser = createAsyncThunk(
    "auth/loginUser"
    , async (values, { rejectWithValue }) => {
        try {
            const token = await axios.post(`${url}/login`, { email: values.email, password: values.password })
            localStorage.setItem("token", token.data)
            // const userslist = [{ "email": values.email }, { "password": values.password }];
            // localStorage.setItem("userslist", userslist)
            return token.data
        } catch (error) {
            console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    })

const authSlice = createSlice({
    name: "auth", initialState,
    reducers: {
        loadUser(state, action) {
            const token = state.token;
            if (token) {
                const user = jwtDecode(token)
                return {
                    ...state,
                    token,
                    name: user.name,
                    email: user.email,
                    _id: user._id,
                    role: user.role,
                    userLoaded: true,
                }
            }
        },
        logoutUser(state, action) {
            localStorage.removeItem("token")
            return {
                ...state,
                token: "",
                name: "",
                email: "",
                _id: "",
                role: "",
                faculty: "",
                registerStatus: "",
                registerError: "",
                loginStatus: "",
                loginError: "",
                userLoaded: false,
            }
        },
    },



    //we use extra reducer because we have action creator in node js
    //in this case we use function not obj
    //builder is obj provided by reduxtoolkit
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state, action) => {
            return { ...state, loginStatus: "pending" }
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            if (action.payload) {                 //we use this verfictation to evide error if token doesn't exist
                const user = jwtDecode(action.payload) //decode token
                // console.log("user==========")
                // console.log(user)
                return {
                    ...state,
                    token: action.payload,
                    role: user.role,
                    name: user.name,
                    email: user.email,
                    _id: user._id,
                    loginStatus: "success",
                }
            } else return state
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            return {
                ...state,
                registerStatus: "rejected",
                registerError: action.payload
            }

        })

        //for login extrareducer
        builder.addCase(loginUser.pending, (state, action) => {
            return { ...state, registerStatus: "pending" }
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
            if (action.payload) {                 //we use this verfictation to evide error if token doesn't exist
                const user = jwtDecode(action.payload) //decode token
                return {
                    ...state,
                    token: action.payload,
                    name: user.name,
                    email: user.email,
                    _id: user._id,
                    registerStatus: "success",
                }
            } else return state
        })
        builder.addCase(registerUser.rejected, (state, action) => {
            return {
                ...state,
                registerStatus: "rejected",
                registerError: action.payload
            }

        })
    },

})

export const { loadUser, logoutUser } = authSlice.actions

export default authSlice.reducer


