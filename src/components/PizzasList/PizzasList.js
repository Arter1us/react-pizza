import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from '@reduxjs/toolkit';

import { fetchPizzas } from "./PizzasSlice";
import PizzasListItem from "../PizzasListItem";
import PizzaListSkeleton from './PizzaListSkeleton';

export default function PizzasList() {

    const pizzasSelector = createSelector(
        (state) => state.pizzas.pizzas,
        (pizzas) => {
            return pizzas;
        }
    );

    const pizzas = useSelector(pizzasSelector);
    const pizzasLoadingStatus = useSelector(state => state.pizzas.pizzasLoadingStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPizzas());
        //eslint-disable-next-line        
    }, [])

    const renderPizzasList = (arr) => {

        if (pizzasLoadingStatus === "loading") {
            return [...new Array(8)].map((_, i) => <PizzaListSkeleton key={i} />)
        } else if (pizzasLoadingStatus === "error") {
            return <h5 className="text-center mt-5">Ошибка загрузки</h5>
        } else if (arr.length === 0) {
            return (
                <h5>Пицц пока нет</h5>
            )
        }

        return arr.map(({ id, ...props }) => {
            return (
                <PizzasListItem key={id} {...props} />
            )
        })
    };

    const elements = renderPizzasList(pizzas);

    return (
        <ul className="content__grid">
            {elements}
        </ul>
    )
}