import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [
        {
            "id": "1",
            "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
            "title": "Сырная",
            "types": [
                0
            ],
            "sizes": [
                26,
                40
            ],
            "price": 245,
            "category": 3,
            "rating": 6
        }
    ]
}

const heroesSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        }
    }
});

const { actions, reducer } = heroesSlice;

export default reducer;
export const { addItem } = actions;