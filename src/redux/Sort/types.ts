export type SortStatus = {
    name: string;
    sortProperty: "rating" | "price" | "title";
};

export interface SortSliceState {
    openSortPopup: boolean;
    sortStatus: SortStatus;
}
