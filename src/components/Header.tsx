import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Search from "./Search";
import { RootState } from "../store";

import reactPizza from "../resources/img/pizza.svg";
import cartButton from "../resources/img/cart_button.svg";

const Header: React.FC = () => {
    const { totalPrice, items } = useSelector((state: RootState) => state.cart);
    const location = useLocation();
    const isMounted = useRef(false);

    useEffect(() => {
        if (isMounted.current) {
            const json = JSON.stringify(items);
            localStorage.setItem("cart", json);
        }
        isMounted.current = true;
    }, [items]);

    return (
        <header className="header">
            <Link to="/" className="header__logo">
                <img src={reactPizza} alt="react-pizza" />
                <div className="header__text">
                    <h1 className="header__title">react pizza</h1>
                    <p className="header__descr">
                        самая вкусная пицца во вселенной
                    </p>
                </div>
            </Link>
            {location.pathname !== "/cart" && <Search />}
            <div className="header__cart">
                {location.pathname !== "/cart" && (
                    <Link
                        to="/cart"
                        className="header__button header__button_cart"
                    >
                        <span className="header__price">{totalPrice} ₽</span>
                        <div className="header__delimiter"></div>
                        <div className="header__count">
                            <img
                                className="header__icon"
                                src={cartButton}
                                alt="cartButton"
                            />
                            <span>{items.length}</span>
                        </div>
                    </Link>
                )}
            </div>
        </header>
    );
};

export default Header;
