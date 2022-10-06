import { useSelector } from "react-redux";
import { RootState } from "../../store";

const CartInfo: React.FC = () => {

    const { totalPrice, items } = useSelector((state: RootState) => state.cart);

    return (
        <div className="cart__info">
            <div className="cart__amount">Всего пицц: <p>{items.length} шт.</p></div>
            <div className="cart__summ">Сумма заказа: <p>{totalPrice} ₽</p></div>
        </div>
    )
};

export default CartInfo;