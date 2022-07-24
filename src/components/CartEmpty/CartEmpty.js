import React from 'react'

import emptyImg from '../../resources/img/empty-cart.png';

export default function CartEmpty() {
    return (
        <section className="cart">
            <div className="cart-empty">
                <h2 className="cart-empty__title">Корзина пустая 😕</h2>
                <p className="cart-empty__text">Вероятней всего, вы не заказывали ещё пиццу.</p>
                <p className="cart-empty__text">Для того, чтобы заказать пиццу, перейдите на главную страницу.</p>
                <img className="cart-empty__img" src={emptyImg} alt="empty-cart" />
                <a className="cart-empty__btn" href="c">Вернуться назад</a>
            </div>
        </section>
    )
}
