import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/http.hook";

export type FiltersItem = {
    name: string;
    label: string;
}

interface CategoriesSliceState {
    filters: FiltersItem[];
    filtersLoadingStatus: string;
    activeFilter: string;
}

const initialState: CategoriesSliceState = {
    filters: [],
    filtersLoadingStatus: "idle",
    activeFilter: "all",
};

export const fetchFilters = createAsyncThunk(
    "filters/fetchFilters",
    async () => {
        const { request } = useHttp();
        return await request(
            `https://62d412595112e98e484a1a40.mockapi.io/filters`
        );
    }
);

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        filtersChanged: (state, action) => {
            state.activeFilter = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilters.pending, (state) => {
                state.filtersLoadingStatus = "loading";
            })
            .addCase(fetchFilters.fulfilled, (state, action) => {
                state.filtersLoadingStatus = "idle";
                state.filters = action.payload;
            })
            .addCase(fetchFilters.rejected, (state) => {
                state.filtersLoadingStatus = "error";
            })
            .addDefaultCase(() => {});
    },
});

const { actions, reducer } = filtersSlice;

export const { filtersChanged } = actions;

export default reducer;
