import { useSelector } from "react-redux";

import Cart from "../Cart/Cart";
import CartEmpty from "../Cart/CartEmpty";

const MainPage = () => {
    const totalPrice = useSelector((state) => state.cart.totalPrice);

    if (!totalPrice) {
        return <CartEmpty />;
    } else {
        return <Cart />;
    }
};

export default MainPage;
