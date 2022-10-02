import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";

import { addItem } from "../Cart/CartList/CartListSlice";

const PizzasListItem = ({ id, imageUrl, title, types, sizes, price }) => {

    const typeNames = ['тонкое', 'традиционное'];

    const [activeType, setActiveType] = useState(null);
    const [activeSize, setActiveSize] = useState(null);

    const items = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const filteredItems = items.filter(item => item.id === id);

    const onClickAdd = () => {
        if ((activeType && activeSize) === null) {
            return;
        } else {
            const item = {
                id,
                title,
                price,
                imageUrl,
                type: activeType,
                size: activeSize
            };
            dispatch(addItem(item));
        }
    };

    const countPizzaClass = classNames('pizza-block__count', { 'pizza-block__count_active': filteredItems.length > 0 });
    const setClass = (propName, state) => {
        const typeClass = classNames('pizza-block__type', { 'pizza-block__type_active': propName === state })
        return typeClass;
    };

    return (
        <>
            <li className="pizza-block">
                <div className="pizza-block__wrapper">
                    <img className="pizza-block__img" src={imageUrl} alt="pizza" />
                    <h3 className="pizza-block__title">{title}</h3>
                    <div className="pizza-block__selectors">
                        <ul className="pizza-block__types">
                            {types.map((type) => {
                                return <li
                                    key={type}
                                    onClick={() => setActiveType(typeNames[type])}
                                    className={setClass(typeNames[type], activeType)}
                                >{typeNames[type]}</li>
                            })}
                        </ul>
                        <ul className="pizza-block__size">
                            {sizes.map((size) => {
                                return <li
                                    key={size}
                                    onClick={() => setActiveSize(size)}
                                    className={setClass(size, activeSize)}
                                >{size} см.</li>
                            })}
                        </ul>
                    </div>
                    <div className="pizza-block__footer">
                        <div className="pizza-block__price">от {price} ₽</div>
                        <button
                            className="pizza-block__btn"
                            onClick={() => onClickAdd()}>
                            <p className="pizza-block__text">Добавить</p>
                            <p className={countPizzaClass}>{filteredItems.length > 0 ? filteredItems.length : ''}</p>
                        </button>
                    </div>
                </div>
            </li>
        </>
    )
};

export default PizzasListItem;