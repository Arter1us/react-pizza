import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openSortPopup: false,
    sortStatus: {
        name: 'популярности',
        sortProperty: 'rating'
    }
};

const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        openSortChanged: (state, action) => {
            state.openSortPopup = action.payload;
        },
        sortStatusChanged: (state, action) => {
            state.sortStatus = action.payload;
        }
    }
});

const { actions, reducer } = sortSlice;

export const { openSortChanged, sortStatusChanged } = actions;

export default reducer;