import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from '@reduxjs/toolkit';

import { fetchPizzas } from "./PizzasSlice";
import PizzasListItem from "../PizzasListItem";
import PizzaListSkeleton from './PizzaListSkeleton';
import Pagination from "../Pagination/Pagination";

export default function PizzasList() {

    // const pizzasSelector = createSelector(
    //     (state) => state.pizzas.pizzas,
    //     (pizzas) => {
    //         return pizzas;
    //     }
    // );

    const activeFilterSelector = createSelector(
        (state) => state.filters.activeFilter,
        (activeFilter) => {
            return activeFilter;
        }
    );

    //const pizzas = useSelector(pizzasSelector);
    const { pizzas, pizzasLoadingStatus, currentPage } = useSelector(state => state.pizzas);
    const activeFilter = useSelector(activeFilterSelector);
    const sortStatus = useSelector(state => state.sort.sortStatus.sortProperty);
    const searchValue = useSelector(state => state.search.searchValue);
    const dispatch = useDispatch();

    const category = activeFilter !== 'all' ? `&category=${activeFilter}` : '';
    const logicParams = (category, sortStatus, currentPage) => {
        const params = {
            category,
            sortStatus,
            currentPage
        };
        return params;
    };

    useEffect(() => {
        dispatch(fetchPizzas());
        //eslint-disable-next-line        
    }, [])

    useEffect(() => {
        dispatch(fetchPizzas(logicParams(category, sortStatus, currentPage)));
        //eslint-disable-next-line        
    }, [activeFilter, sortStatus, searchValue, currentPage])

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

        return arr.filter((obj) => {
            if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
                return true;
            }
            return false;
        })
            .map((item) => {
                const { id, ...props } = item;
                return (
                    <PizzasListItem
                        key={id}
                        {...props} />
                )
            })
    };

    const elements = renderPizzasList(pizzas);

    return (
        <>
            <ul className="content__grid">
                {elements}
            </ul>
            <Pagination />
        </>
    )
}