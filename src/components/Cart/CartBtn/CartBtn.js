import React from 'react'
import { Link } from 'react-router-dom'

export default function CartBtn() {
    return (
        <div className="cart__btn">
            <Link to=".." className="cart__btn-back" href="a">Вернуться назад</Link>
            <a className="cart__btn-pay" href="pay">Оплатить сейчас</a>
        </div>
    )
}