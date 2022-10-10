import { Link } from "react-router-dom";

import emptyImg from "../../resources/img/empty-cart.png";

const CartEmpty: React.FC = () => {
    return (
        <section className="cart">
            <div className="cart-empty">
                <h2 className="cart-empty__title">Корзина пустая 😕</h2>
                <p className="cart-empty__text">
                    Вероятней всего, вы не заказывали ещё пиццу.
                </p>
                <p className="cart-empty__text">
                    Для того, чтобы заказать пиццу, перейдите на главную
                    страницу.
                </p>
                <img
                    className="cart-empty__img"
                    src={emptyImg}
                    alt="empty-cart"
                />
                <Link to=".." className="cart-empty__btn">
                    Вернуться назад
                </Link>
            </div>
        </section>
    );
};

export default CartEmpty;
