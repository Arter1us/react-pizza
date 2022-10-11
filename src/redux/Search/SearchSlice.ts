import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchSliceState } from "./types";

const initialState: SearchSliceState = {
    searchValue: "",
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        searchChanged: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        },
    },
});

const { actions, reducer } = searchSlice;

export const { searchChanged } = actions;

export default reducer;
