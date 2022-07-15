import { createSlice } from '@reduxjs/toolkit'

const initialState = { backdrop: false, popupbackdrop: false }

const backdropSlice = createSlice({
    name: 'backdrop',
    initialState,
    reducers: {
        enableBackDrop(state) {
            state.backdrop = true
        },
        disableBackDrop(state) {
            state.backdrop = false
        },
        enablepopupBackdrop(state) {
            state.popupbackdrop = true
        },
        disablepopupBackdrop(state) {
            state.popupbackdrop = false
        }
    }
})

export const { enableBackDrop,
    disableBackDrop,
    enablepopupBackdrop,
    disablepopupBackdrop } = backdropSlice.actions;

export default backdropSlice.reducer