import { configureStore } from '@reduxjs/toolkit';
import pizzas from '../components/PizzasList/PizzasSlice';
import filters from '../components/Navbar/NavbarSlice';

export const store = configureStore({
    reducer: { pizzas, filters },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
});
