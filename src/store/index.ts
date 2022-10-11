import { configureStore } from "@reduxjs/toolkit";
import pizzas from "../redux/Pizzas/PizzasSlice";
import filters from "../redux/Categories/CategoriesSlice";
import sort from "../redux/Sort/SortSlice";
import search from "../redux/Search/SearchSlice";
import cart from "../redux/Cart/CartListSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: { pizzas, filters, sort, search, cart },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
