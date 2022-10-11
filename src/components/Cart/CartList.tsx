import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { CartItem } from "../../redux/Cart/types";

import { RootState } from "../../store";
import CartListItem from "./CartListItem";

const CartList: React.FC = () => {
    const items = useSelector((state: RootState) => state.cart.items);

    const removeDuplicates = (arr: CartItem[]) => {
        const result: CartItem[] = [];
        const duplicatesIndices: number[] = [];

        // Перебираем каждый элемент в исходном массиве
        arr.forEach((current, index: number) => {
            if (duplicatesIndices.includes(index)) return;

            result.push(current);

            // Сравниваем каждый элемент в массиве после текущего
            for (
                let comparisonIndex = index + 1;
                comparisonIndex < arr.length;
                comparisonIndex++
            ) {
                const comparison = arr[comparisonIndex];
                const currentKeys = Object.keys(current);
                const comparisonKeys = Object.keys(comparison);

                // Проверяем длину массивов
                if (currentKeys.length !== comparisonKeys.length) continue;

                // Проверяем значение ключей
                const currentKeysString = currentKeys
                    .sort()
                    .join("")
                    .toLowerCase();
                const comparisonKeysString = comparisonKeys
                    .sort()
                    .join("")
                    .toLowerCase();
                if (currentKeysString !== comparisonKeysString) continue;

                // Проверяем индексы ключей
                let valuesEqual = true;
                for (let i = 0; i < currentKeys.length; i++) {
                    const key: any = currentKeys[i];
                    /* @ts-ignore */
                    if (current[key] !== comparison[key]) {
                        valuesEqual = false;
                        break;
                    }
                }
                if (valuesEqual) duplicatesIndices.push(comparisonIndex);
            } // Конец цикла
        });
        return result;
    };

    const renderItemsList = (arr: CartItem[]) => {
        return arr.map((item) => {
            return <CartListItem key={uuidv4()} {...item} />;
        });
    };

    const elements = renderItemsList(removeDuplicates(items));

    return (
        <div className="cart__wrapper">
            <ul className="cart-list">{elements}</ul>
        </div>
    );
};

export default CartList;
