import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from '../../hooks/http.hook';

const initialState = {
    pizzas: [],
    pizzasLoadingStatus: 'idle'
};

export const fetchPizzas = createAsyncThunk(
    'pizzas/fetchPizzas',
    async () => {
        const { request } = useHttp();
        return await request("https://62d412595112e98e484a1a40.mockapi.io/pizzas")
    }
);

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizzas.pending, state => {
                state.pizzasLoadingStatus = 'loading'
            })
            .addCase(fetchPizzas.fulfilled, (state, action) => {
                state.pizzasLoadingStatus = 'idle';
                state.pizzas = action.payload;
            })
            .addCase(fetchPizzas.rejected, state => {
                state.pizzasLoadingStatus = 'error';
            })
            .addDefaultCase(() => { })
    }
});

const { reducer } = pizzasSlice;

export default reducer;