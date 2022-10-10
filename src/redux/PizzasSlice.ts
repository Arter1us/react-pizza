import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/http.hook";

export type PizzasItem = {
    id: string;
    imageUrl: string;
    title: string;
    types: number[];
    sizes: number[];
    price: number;
    category: string;
    rating: number;
}

type FetchPizzasArgs = {
    category: string;
    sortStatus: string;
    currentPage: number;
}

interface PizzaSliceState {
    pizzas: PizzasItem[];
    pizzasLoadingStatus: string;
    currentPage: number;
}

const initialState: PizzaSliceState = {
    pizzas: [],
    pizzasLoadingStatus: "idle",
    currentPage: 1,
};

export const fetchPizzas = createAsyncThunk(
    "pizzas/fetchPizzas",
    async (params: FetchPizzasArgs) => {
        const { category, sortStatus, currentPage } = params;
        const { request } = useHttp();
        return await request(
            `https://62d412595112e98e484a1a40.mockapi.io/pizzas?page=${currentPage}&limit=4${category}&sortBy=${sortStatus}&order=desc`
        );
    }
);

const pizzasSlice = createSlice({
    name: "pizzas",
    initialState,
    reducers: {
        currentPageChanged: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizzas.pending, (state) => {
                state.pizzasLoadingStatus = "loading";
            })
            .addCase(fetchPizzas.fulfilled, (state, action: PayloadAction<[]>) => {
                state.pizzasLoadingStatus = "idle";
                state.pizzas = action.payload;
            })
            .addCase(fetchPizzas.rejected, (state) => {
                state.pizzasLoadingStatus = "error";
            })
            .addDefaultCase(() => {});
    },
});

const { actions, reducer } = pizzasSlice;

export const { currentPageChanged } = actions;

export default reducer;
