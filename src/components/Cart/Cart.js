import CartHeader from './CartHeader';
import CartList from './CartList/CartList';
import CartInfo from './CartInfo';
import CartBtn from './CartBtn';

const Cart = () => {
    return (
        <section className="cart">
            <CartHeader />
            <CartList />
            <CartInfo />
            <CartBtn />
        </section>
    )
};

export default Cart;