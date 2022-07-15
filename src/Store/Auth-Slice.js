import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false, user: { name: '', email: '', _id: '' }, username: ''
}

const AuthSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        UserName(state, action) {
            state.username = action.payload
        },
        User(state, action) {
            state.user = action.payload
        },
        Login(state, action) {
            state.isLoggedIn = action.payload
        },
        Logout(state) {
            state.isLoggedIn = false
            state.user = null
        }
    }
})

export const { UserName, Login, Logout, User } = AuthSlice.actions

export default AuthSlice.reducer