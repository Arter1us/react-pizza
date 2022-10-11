export type PizzasItem = {
    id: string;
    imageUrl: string;
    title: string;
    types: number[];
    sizes: number[];
    price: number;
    category: string;
    rating: number;
};

export type FetchPizzasArgs = {
    category: string;
    sortStatus: string;
    currentPage: number;
};

export interface PizzaSliceState {
    pizzas: PizzasItem[];
    pizzasLoadingStatus: string;
    currentPage: number;
}
