import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from '@reduxjs/toolkit';

import { fetchFilters } from "./NavbarSlice";
import SkeletonNavbar from './SkeletonNavbar';

export default function Navbar() {

    const filtersSelector = createSelector(
        (state) => state.filters.filters,
        (filters) => {
            console.log(filters);
            return filters;
        }
    );

    const filters = useSelector(filtersSelector);
    const filtersLoadingStatus = useSelector(state => state.filters.filtersLoadingStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFilters());
        //eslint-disable-next-line
    }, [])

    const renderFiltersList = (arr) => {

        if (filtersLoadingStatus === "loading") {
            return [...new Array(6)].map((_, i) => <SkeletonNavbar key={i} />)
        } else if (filtersLoadingStatus === "error") {
            return <h5 className="text-center mt-5">Ошибка загрузки</h5>
        } else if (arr.length === 0) {
            return (
                <h5>Фильтров пока нет</h5>
            )
        }

        return arr.map(({ name, label }) => {
            return (
                <li key={name} className="navbar__element">{label}</li>
            )
        })
    };

    const elements = renderFiltersList(filters);

    return (
        <nav className="navbar">
            <ul className="navbar__categories">
                {elements}
            </ul>
            <div className="sort">
                <div className="sort__label">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                            fill="#2C2C2C" />
                    </svg>
                    <b>Сортировка по: </b>
                    <span>популярности</span>
                </div>
                <div className="sort__popup">
                    <ul>
                        <li className="active">популярности</li>
                        <li>цене</li>
                        <li>алфавиту</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}