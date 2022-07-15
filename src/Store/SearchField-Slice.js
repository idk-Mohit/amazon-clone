import { createSlice } from '@reduxjs/toolkit';

const initialState = { query: '' }

const QuerySlice = createSlice({
    name: 'query',
    initialState,
    reducers: {
        setQuery(state, action) {
            state.query = action.payload
        }
    }
})

export const { setQuery } = QuerySlice.actions

export default QuerySlice.reducer