import { useSelector } from "react-redux";

const CartInfo = () => {

    const { totalPrice, items } = useSelector(state => state.cart);

    return (
        <div className="cart__info">
            <div className="cart__amount">Всего пицц: <p>{items.length} шт.</p></div>
            <div className="cart__summ">Сумма заказа: <p>{totalPrice} ₽</p></div>
        </div>
    )
};

export default CartInfo;