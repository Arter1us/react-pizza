import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/CartListSlice";

import cartImg from "../../resources/img/cart.png";
import trash from "../../resources/img/trash.svg";

const CartHeader: React.FC = () => {
    const dispatch = useDispatch();

    return (
        <div className="cart__top">
            <div className="cart__title">
                <img className="cart__img" src={cartImg} alt="cart" />
                <h2 className="cart__text">Корзина</h2>
            </div>
            <div className="cart__clear-wrapper">
                <div
                    className="cart__clear"
                    onClick={() => dispatch(clearCart())}
                >
                    <img src={trash} alt="trash" />
                    <p className="cart__clear-text">Очистить корзину</p>
                </div>
            </div>
        </div>
    );
};

export default CartHeader;
