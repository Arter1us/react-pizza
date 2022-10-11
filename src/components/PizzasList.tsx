import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import qs from "qs";

import { fetchPizzas, currentPageChanged } from "../redux/Pizzas/PizzasSlice";
import { sortStatusChanged } from "../redux/Sort/SortSlice";
import { filtersChanged } from "../redux/Categories/CategoriesSlice";
import PizzasListItem from "./PizzasListItem";
import PizzasListSkeleton from "./Skeletons/PizzasListSkeleton";
import Pagination from "./Pagination";
import { list } from "./Sort";
import { RootState, useAppDispatch } from "../store";
import { PizzasItem } from "../redux/Pizzas/types";

const PizzasList = () => {
    const { pizzas, pizzasLoadingStatus, currentPage } = useSelector(
        (state: RootState) => state.pizzas
    );
    const activeFilter = useSelector(
        (state: RootState) => state.filters.activeFilter
    );
    const sortStatus = useSelector(
        (state: RootState) => state.sort.sortStatus.sortProperty
    );
    const searchValue = useSelector(
        (state: RootState) => state.search.searchValue
    );
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const isSearch = useRef(false);
    const isMounted = useRef(false);

    const category = activeFilter !== "all" ? `&category=${activeFilter}` : "";

    const logicParams = (
        category: string,
        sortStatus: string,
        currentPage: number
    ) => {
        const params = {
            category,
            sortStatus,
            currentPage,
        };
        return params;
    };

    useEffect(() => {
        dispatch(fetchPizzas(logicParams(category, sortStatus, currentPage)));
        //eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));

            const sort = list.find(
                (obj) => obj.sortProperty === params.sortStatus
            );

            dispatch(currentPageChanged(Number(params.currentPage)));
            dispatch(sortStatusChanged(sort ? sort : list[0]));
            dispatch(filtersChanged(String(params.activeFilter)));

            isSearch.current = true;
        }
        //eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (!isSearch.current) {
            dispatch(
                fetchPizzas(logicParams(category, sortStatus, currentPage))
            );
        }
        isSearch.current = false;
        //eslint-disable-next-line
    }, [activeFilter, sortStatus, searchValue, currentPage]);

    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                currentPage,
                sortStatus,
                activeFilter,
            });
            navigate(`?${queryString}`);
        }
        isMounted.current = true;
        //eslint-disable-next-line
    }, [activeFilter, sortStatus, searchValue, currentPage]);

    const renderPizzasList = (arr: PizzasItem[]) => {
        if (pizzasLoadingStatus === "loading") {
            return [...new Array(4)].map((_, i) => (
                <PizzasListSkeleton key={i} />
            ));
        } else if (pizzasLoadingStatus === "error") {
            return <h5 className="text-center mt-5">Ошибка загрузки</h5>;
        } else if (arr.length === 0) {
            return <h5>Пицц пока нет</h5>;
        }

        return arr
            .filter((obj) => {
                if (
                    obj.title.toLowerCase().includes(searchValue.toLowerCase())
                ) {
                    return true;
                }
                return false;
            })
            .map((item) => {
                return <PizzasListItem key={item.id} {...item} />;
            });
    };

    const elements = renderPizzasList(pizzas);

    return (
        <>
            <ul className="content__grid">{elements}</ul>
            <Pagination />
        </>
    );
};

export default PizzasList;
