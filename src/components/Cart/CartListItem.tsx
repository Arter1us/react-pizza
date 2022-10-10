import { useSelector, useDispatch } from "react-redux";
import {
    addItem,
    CartItem,
    decrementItem,
    removeItem,
} from "../../redux/CartListSlice";
import { RootState } from "../../store";

import cartListInc from "../../resources/img/inc.svg";
import cartListDeleteItem from "../../resources/img/delete.svg";
import classNames from "classnames";

type CartListItemProps = {
    id: string;
    imageUrl: string;
    title: string;
    type: string;
    size: number;
    price: number;
};

const CartListItem: React.FC<CartListItemProps> = ({
    id,
    imageUrl,
    title,
    type,
    size,
    price,
}) => {
    const dispatch = useDispatch();

    const items = useSelector((state: RootState) => state.cart.items);
    const filteredItems = items.filter(
        (item) => item.id === id && item.type === type && item.size === size
    );

    const onClickAdd = () => {
        const item: CartListItemProps = {
            id,
            imageUrl,
            title,
            type,
            size,
            price,
        };
        dispatch(addItem(item));
    };

    const onClickDecrement = (id: string, type: string, size: number) => {
        const idx = items.findIndex(
            (item) => item.id === id && item.type === type && item.size === size
        );
        if (filteredItems.length === 1) {
            return;
        }
        dispatch(decrementItem(idx));
    };

    return (
        <li className="cart-list__item">
            <div className="cart-list__info">
                <img className="cart-list__img" src={imageUrl} alt="pizza" />
                <div className="cart-list__text">
                    <h2 className="cart-list__title">{title}</h2>
                    <p className="cart-list__descr">
                        {type}, {size} см.
                    </p>
                </div>
            </div>
            <div className="cart-list__count">
                <button
                    className={classNames("cart-list__dec", {
                        "cart-list__dec_disabled": filteredItems.length === 1,
                    })}
                    disabled={filteredItems.length === 2}
                >
                    <svg
                        onClick={() => onClickDecrement(id, type, size)}
                        className="cart-list__dec-img"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="16"
                            cy="16"
                            r="15"
                            fill="white"
                            stroke="#FE5F1E"
                            strokeWidth="2"
                        />
                        <path
                            d="M15.0402 15.04H19.8402C20.3704 15.04 20.8002 15.4698 20.8002 
                            16C20.8002 16.5302 20.3704 16.96 19.8402 16.96H15.0402H12.1602C11.63 
                            16.96 11.2002 16.5302 11.2002 16C11.2002 15.4698 11.63 15.04 12.1602 
                            15.04H15.0402Z"
                            fill="#FE5F1E"
                        />
                    </svg>
                </button>
                <p className="cart-list__number">{filteredItems.length}</p>
                <div className="cart-list__inc">
                    <img
                        onClick={() => onClickAdd()}
                        src={cartListInc}
                        alt="cartListInc"
                    />
                </div>
            </div>
            <div className="cart-list__price">{price} ₽</div>
            <img
                onClick={() =>
                    dispatch(removeItem({ id, type, size } as CartItem))
                }
                className="cart-list__cancel"
                src={cartListDeleteItem}
                alt="cartListDeleteItem"
            />
        </li>
    );
};

export default CartListItem;
