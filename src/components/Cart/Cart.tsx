import CartHeader from "./CartHeader";
import CartList from "./CartList";
import CartInfo from "./CartInfo";
import CartBtn from "./CartBtn";

const Cart: React.FC = () => {
    return (
        <section className="cart">
            <CartHeader />
            <CartList />
            <CartInfo />
            <CartBtn />
        </section>
    );
};

export default Cart;
