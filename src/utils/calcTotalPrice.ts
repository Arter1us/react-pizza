import { CartItem } from "../redux/Cart/types";

export const calcTotalPrice = (items: CartItem[]) => {
    return items.reduce((sum, obj) => {
        return obj.price + sum;
    }, 0);
};
