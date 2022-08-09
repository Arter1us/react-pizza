import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchValue: ''
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchChanged: (state, action) => {
            state.searchValue = action.payload;
        }
    }
});

const { actions, reducer } = searchSlice;

export const { searchChanged } = actions;

export default reducer;