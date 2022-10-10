import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SortStatus = {
    name: string;
    sortProperty: "rating" | "price" | "title";
}

interface SortSliceState {
    openSortPopup: boolean;
    sortStatus: SortStatus
}

const initialState: SortSliceState = {
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
        openSortChanged: (state, action: PayloadAction<boolean>) => {
            state.openSortPopup = action.payload;
        },
        sortStatusChanged: (state, action: PayloadAction<SortStatus>) => {
            state.sortStatus = action.payload;
        }
    }
});

const { actions, reducer } = sortSlice;

export const { openSortChanged, sortStatusChanged } = actions;

export default reducer;