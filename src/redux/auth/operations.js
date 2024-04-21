import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitApi } from "../../config/goitApi";

export const registerThunk = createAsyncThunk('auth/regoster', async (credentials, thunkApi) => {
    try {
        const { data } = await goitApi.post('/users/signup', credentials);
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const loginThunk = createAsyncThunk('auth/login', async (credentials, thunkApi) => {
    try {
        const { data } = await goitApi.post('/users/login', credentials);
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})