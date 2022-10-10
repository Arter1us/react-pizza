import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openSortChanged, SortStatus, sortStatusChanged } from "../redux/SortSlice";
import { RootState } from "../store";

import triangle from "../resources/img/triangle.svg";

export const list: SortStatus[] = [
    { name: "популярности", sortProperty: "rating" },
    { name: "цене", sortProperty: "price" },
    { name: "алфавиту", sortProperty: "title" },
];

const Sort: React.FC = () => {
    const openSortPopup = useSelector((state: RootState) => state.sort.openSortPopup);
    const sortStatus = useSelector((state: RootState) => state.sort.sortStatus);
    const dispatch = useDispatch();
    const sortRef = useRef<HTMLDivElement>(null);

    const selectSortName = (prop: SortStatus) => {
        dispatch(openSortChanged(false));
        dispatch(sortStatusChanged(prop));
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
                dispatch(openSortChanged(false));
            }
        };
        document.body.addEventListener("click", handleClickOutside);
        return () => {
            document.body.removeEventListener("click", handleClickOutside);
        };
        //eslint-disable-next-line
    }, []);

    return (
        <div ref={sortRef} className="sort">
            <div className="sort__label">
                <img src={triangle} alt="triangle" />
                <b>Сортировка по: </b>
                <span onClick={() => dispatch(openSortChanged(!openSortPopup))}>
                    {sortStatus.name}
                </span>
            </div>
            {openSortPopup ? (
                <div className="sort__popup">
                    <ul>
                        {list.map((item, i) => {
                            return (
                                <li
                                    key={i}
                                    onClick={() => selectSortName(item)}
                                    className={
                                        sortStatus.name === item.name
                                            ? "active"
                                            : ""
                                    }
                                >
                                    {item.name}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ) : null}
        </div>
    );
};

export default Sort;
