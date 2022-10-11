export type CartItem = {
    id: string;
    imageUrl: string;
    title: string;
    type: string;
    size: number;
    price: number;
};

export interface CartListSliceState {
    totalPrice: number;
    items: CartItem[];
}
