import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Search from "./Search";
import { RootState } from "../store";

import reactPizza from "../resources/img/pizza.svg";
import cartButton from "../resources/img/cart_button.svg";

const Header = () => {
    const { totalPrice, items } = useSelector((state: RootState) => state.cart);

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
            <Search />
            <div className="header__cart">
                <Link to="/cart" className="header__button header__button_cart">
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
            </div>
        </header>
    );
};

export default Header;
