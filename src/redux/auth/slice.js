import { createSlice } from "@reduxjs/toolkit"

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
})

export const authReducer = slice.reducer;
export const { selectToken, selectIsLoggedIn, selectUser } = slice.selectors;