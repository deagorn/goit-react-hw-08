import { createSlice } from "@reduxjs/toolkit"
import { loginThunk, registerThunk } from "./operations";

const initialState = {
    user: {
        name: '',
        email:'',
    },
    token: '',
    isLoggedIn: false,
}

const slice = createSlice({
    name: 'auth',
    initialState,
    selectors: {
        selectToken: state => state.token,
        selectUser: state => state.user,
        selectIsLoggedIn: state => state.isLoggedIn,
    },
    extraReducers: bilder => {
        bilder.addCase(registerThunk.fulfilled, (state, { payload }) => {
            state.user.name = payload.user.name
            state.user.email = payload.user.email
            state.token = payload.token
            state.isLoggedIn = true
        })
        .addCase(loginThunk.fulfilled, (state, { payload }) => {
            state.user.name = payload.user.name
            state.user.email = payload.user.email
            state.token = payload.token
            state.isLoggedIn = true
        })
    },
})

export const authReducer = slice.reducer;
export const { selectToken, selectIsLoggedIn, selectUser } = slice.selectors;