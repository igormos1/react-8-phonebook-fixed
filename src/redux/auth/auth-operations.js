import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unSet() {
        axios.defaults.headers.common.Authorization = ``
    }
};

export const register = createAsyncThunk('auth/register', async credentials =>{
    try {
        console.log(credentials)
        const { data } = await axios.post('/users/signup', credentials);
        console.log(data)
        token.set(data.token)
        return data;
    } catch(error) {
        alert(error.message);
    }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
    try {
        console.log(credentials)
        const { data } = await axios.post('/users/login', credentials)
        token.set(data.token);
        console.log(data)
        return data;
    } catch (error) {console.log(error.message) }
});

const logOut = createAsyncThunk('auth/logout', async () => {
    try {
        await axios.post('/users/logout');
        token.unSet();
    } catch (error) {console.log(error.message)}
});

const fetchCurrentUser = createAsyncThunk('auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;
        // console.log(persistedToken)      
        if (persistedToken === null) {
            return thunkAPI.rejectWithValue();
        }

        token.set(persistedToken);

        try {
            const { data } = await axios.get('/users/current');
            console.log(data)
            return data;
        } catch (error) { console.log(error.message)}
    }
);

const authOperations = {
    register,
    logIn,
    logOut,
    fetchCurrentUser,
};

export default authOperations;
