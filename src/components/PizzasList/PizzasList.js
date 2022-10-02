import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from '@reduxjs/toolkit';
import qs from 'qs';

import { fetchPizzas, currentPageChanged } from "./PizzasSlice";
import { sortStatusChanged } from "../Sort/SortSlice";
import { filtersChanged } from "../Categories/CategoriesSlice";
import PizzasListItem from "../PizzasListItem";
import PizzasListSkeleton from './PizzasListSkeleton';
import Pagination from "../Pagination/Pagination";
import { list } from "../Sort/Sort";

const PizzasList = () => {

    const activeFilterSelector = createSelector(
        (state) => state.filters.activeFilter,
        (activeFilter) => {
            return activeFilter;
        }
    );

    const { pizzas, pizzasLoadingStatus, currentPage } = useSelector(state => state.pizzas);
    const activeFilter = useSelector(activeFilterSelector);
    const sortStatus = useSelector(state => state.sort.sortStatus.sortProperty);
    const searchValue = useSelector(state => state.search.searchValue);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isSearch = useRef(false);
    const isMounted = useRef(false);

    const category = activeFilter !== 'all' ? `&category=${activeFilter}` : '';

    const logicParams = (category, sortStatus, currentPage) => {
        const params = {
            category,
            sortStatus,
            currentPage
        };
        return params;
    };

    // useEffect(() => {
    //     dispatch(fetchPizzas());
    //     //console.log('1');
    //     //eslint-disable-next-line
    // }, [])

    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));

            const sort = list.find(obj => obj.sortProperty === params.sortStatus);

            dispatch(currentPageChanged(params.currentPage));
            dispatch(sortStatusChanged(sort));
            dispatch(filtersChanged(params.activeFilter));

            isSearch.current = true;
        }
        //console.log('2');
        //eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (!isSearch.current) {
            dispatch(fetchPizzas(logicParams(category, sortStatus, currentPage)));
        }
        isSearch.current = false;
        //console.log('3');
        //eslint-disable-next-line
    }, [activeFilter, sortStatus, searchValue, currentPage])

    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                currentPage,
                sortStatus,
                activeFilter
            });
            navigate(`?${queryString}`)
        }
        isMounted.current = true;
        //console.log('4');
        //eslint-disable-next-line        
    }, [activeFilter, sortStatus, searchValue, currentPage])

    const renderPizzasList = (arr) => {

        if (pizzasLoadingStatus === "loading") {
            return [...new Array(4)].map((_, i) => <PizzasListSkeleton key={i} />)
        } else if (pizzasLoadingStatus === "error") {
            return <h5 className="text-center mt-5">Ошибка загрузки</h5>
        } else if (arr.length === 0) {
            return <h5>Пицц пока нет</h5>
        }

        return arr.filter((obj) => {
            if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
                return true;
            }
            return false;
        })
            .map((item) => {
                return (
                    <PizzasListItem
                        key={item.id}
                        {...item} />
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
};

export default PizzasList;