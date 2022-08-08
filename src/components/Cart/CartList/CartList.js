import { useSelector } from "react-redux";
import { createSelector } from '@reduxjs/toolkit';

import CartListItem from '../CartListItem';

export default function CartList() {

    const itemsSelector = createSelector(
        (state) => {
            return state.cart.items;
        },
        (items) => {
            console.log(items);
            return items;
        }
    );

    const items = useSelector(itemsSelector);

    const renderItemsList = (arr) => {

        return arr.map((item) => {
            return (
                <CartListItem
                    key={item.id}
                    {...item} />
            )
        })
    };

    const elements = renderItemsList(items);

    return (
        <div className="cart__wrapper">
            <ul className="cart-list">
                {elements}
                {console.log(items)}
            </ul>
        </div>
    )
}
