import { useEffect } from "react";
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import classNames from "classnames";

import {
    filtersChanged,
    fetchFilters,
} from "../redux/Categories/CategoriesSlice";
import CategoriesSkeleton from "./Skeletons/CategoriesSkeleton";
import { RootState, useAppDispatch } from "../store";
import { FiltersItem } from "../redux/Categories/types";

const Categories: React.FC = () => {
    const filtersSelector = createSelector(
        (state: RootState) => state.filters.filters,
        (filters) => {
            return filters;
        }
    );

    const dispatch = useAppDispatch();

    const filters = useSelector(filtersSelector);
    const { filtersLoadingStatus, activeFilter } = useSelector(
        (state: RootState) => state.filters
    );

    useEffect(() => {
        dispatch(fetchFilters());
        //eslint-disable-next-line
    }, []);

    const selectFilterId = (name: string) => {
        dispatch(filtersChanged(name));
    };

    const renderFiltersList = (arr: FiltersItem[]) => {
        if (filtersLoadingStatus === "loading") {
            return [...new Array(6)].map((_, i) => (
                <CategoriesSkeleton key={i} />
            ));
        } else if (filtersLoadingStatus === "error") {
            return <h5 className="text-center mt-5">Ошибка загрузки</h5>;
        } else if (arr.length === 0) {
            return <h5>Фильтров пока нет</h5>;
        }

        return arr.map(({ name, label }) => {
            const btnClass = classNames("navbar__element", {
                navbar__element_active: name === activeFilter,
            });

            return (
                <li
                    key={name}
                    className={btnClass}
                    onClick={() => selectFilterId(name)}
                >
                    {label}
                </li>
            );
        });
    };

    const elements = renderFiltersList(filters);

    return <ul className="navbar__categories">{elements}</ul>;
};

export default Categories;
