import { configureStore } from '@reduxjs/toolkit';
import pizzas from '../components/PizzasList/PizzasSlice';
import filters from '../components/Categories/CategoriesSlice';
import sort from '../components/Sort/SortSlice';
import search from '../components/Search/SearchSlice';

export const store = configureStore({
    reducer: { pizzas, filters, sort, search },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
});
