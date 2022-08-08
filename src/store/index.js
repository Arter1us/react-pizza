import { configureStore } from '@reduxjs/toolkit';
import pizzas from '../components/PizzasList/PizzasSlice';
import filters from '../components/Categories/CategoriesSlice';
import cart from '../components/CartList/CartListSlice';
import sort from '../components/Sort/SortSlice';

export const store = configureStore({
    reducer: { pizzas, filters, cart, sort },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
});
