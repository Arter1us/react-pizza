import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
//import debounce from "lodash.debounce";
import { searchChanged } from "../redux/SearchSlice";
import { RootState } from "../store";

import search from "../resources/img/search.svg";
import cancel from "../resources/img/cancel.svg";

const Search = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const searchValue = useSelector((state: RootState) => state.search.searchValue);
    const dispatch = useDispatch();

    const onClickClear = () => {
        dispatch(searchChanged(""));
        inputRef.current?.focus();
    };

    return (
        <div className="header__search-wrapper">
            <img
                className="header__search-icon"
                src={search}
                alt="search_icon"
            />
            <input
                value={searchValue}
                onChange={(event) =>
                    dispatch(searchChanged(event.target.value))
                }
                placeholder="Поиск пицц..."
                className="header__search"
                ref={inputRef}
            />
            {searchValue && (
                <img
                    onClick={() => onClickClear()}
                    className="header__search-close"
                    src={cancel}
                    alt="cancel_icon"
                />
            )}
        </div>
    );
};

export default Search;
