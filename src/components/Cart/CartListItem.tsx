import { useSelector, useDispatch } from "react-redux";
import { addItem, decrementItem, removeItem } from "../../redux/CartListSlice";
import { RootState } from "../../store";

import cartListDec from "../../resources/img/dec.svg";
import cartListInc from "../../resources/img/inc.svg";
import cartListDeleteItem from "../../resources/img/delete.svg";

type CartListItemProps = {
    id: string;
    imageUrl: string;
    title: string;
    type: string;
    size: number;
    price: number;
}

const CartListItem: React.FC<CartListItemProps> = ({ id, imageUrl, title, type, size, price }) => {
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
            price
        };
        dispatch(addItem(item));
    };

    const onClickDecrement = (id: string, type: string, size: number) => {
        const idx = items.findIndex(
            (item) => item.id === id && item.type === type && item.size === size
        );
        dispatch(decrementItem(idx));
    };

    const onClickRemove = () => {
        const item: CartListItemProps = {
            id,
            imageUrl,
            title,
            type,
            size,
            price
        };
        dispatch(removeItem(item));
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
                <div className="cart-list__dec">
                    <img
                        onClick={() => onClickDecrement(id, type, size)}
                        src={cartListDec}
                        alt="cartListDec"
                    />
                </div>
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
                onClick={() => onClickRemove()}
                className="cart-list__cancel"
                src={cartListDeleteItem}
                alt="cartListDeleteItem"
            />
        </li>
    );
};

export default CartListItem;
