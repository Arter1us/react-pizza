import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCartFromLocalStorage } from "../../utils/getCartFromLS";
import { CartItem, CartListSliceState } from "./types";

const { items, totalPrice } = getCartFromLocalStorage();

const initialState: CartListSliceState = {
    totalPrice,
    items,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            state.items.push(action.payload);

            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price + sum;
            }, 0);
        },
        decrementItem: (state, action: PayloadAction<number>) => {
            state.items.splice(action.payload, 1);

            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price + sum;
            }, 0);
        },
        removeItem: (state, action: PayloadAction<CartItem>) => {
            state.items = state.items.filter(
                (item) =>
                    item.id !== action.payload.id ||
                    item.type !== action.payload.type ||
                    item.size !== action.payload.size
            );

            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price + sum;
            }, 0);
        },
        clearCart: (state) => {
            state.items = [];
            state.totalPrice = 0;
        },
    },
});

const { actions, reducer } = cartSlice;

export default reducer;
export const { addItem, decrementItem, removeItem, clearCart } = actions;
