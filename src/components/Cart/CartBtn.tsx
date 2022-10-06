import { Link } from "react-router-dom";

const CartBtn: React.FC = () => {
    return (
        <div className="cart__btn">
            <Link to=".." className="cart__btn-back">
                Вернуться назад
            </Link>
            <Link to="/pay" className="cart__btn-pay">
                Оплатить сейчас
            </Link>
        </div>
    );
};

export default CartBtn;
