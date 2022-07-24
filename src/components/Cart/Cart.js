import React from 'react'

import CartHeader from '../CartHeader';
import CartList from '../CartList';
import CartInfo from '../CartInfo';
import CartBtn from '../CartBtn';

export default function Cart() {
    return (
        <section className="cart">
            <CartHeader />
            <CartList />
            <CartInfo />
            <CartBtn />
        </section>
    )
}
