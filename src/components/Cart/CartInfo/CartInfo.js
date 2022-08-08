import React from 'react'

export default function CartInfo() {
    return (
        <div className="cart__info">
            <div className="cart__amount">Всего пицц: <p>3 шт.</p>
            </div>
            <div className="cart__summ">Сумма заказа: <p>900 ₽</p>
            </div>
        </div>
    )
}
