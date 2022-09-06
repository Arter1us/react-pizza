import { configureStore } from '@reduxjs/toolkit';
import pizzas from '../components/PizzasList/PizzasSlice';
import filters from '../components/Categories/CategoriesSlice';
import sort from '../components/Sort/SortSlice';
import search from '../components/Search/SearchSlice';
import cart from '../components/Cart/CartList/CartListSlice';

export const store = configureStore({
    reducer: { pizzas, filters, sort, search, cart },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
});
