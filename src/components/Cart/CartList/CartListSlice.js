import { createSlice } from "@reduxjs/toolkit";
//import isEqual from "lodash.isequal";

const initialState = {
    totalPrice: 0,
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);

            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price + sum;
            }, 0);
        }
    }
});

const { actions, reducer } = cartSlice;

export default reducer;
export const { addItem } = actions;

// {
        //     "id": "1",
        //     "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
        //     "title": "Сырная",
        //     "types": [
        //         0
        //     ],
        //     "sizes": [
        //         26,
        //         40
        //     ],
        //     "price": 245,
        //     "category": 3,
        //     "rating": 6
        // }