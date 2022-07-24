import React from 'react'

import CartListItem from '../CartListItem';

export default function CartList() {
    return (
        <div className="cart__wrapper">
            <ul className="cart-list">
                <CartListItem />
                <CartListItem />
                <CartListItem />
            </ul>
        </div>
    )
}
