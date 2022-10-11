export type FiltersItem = {
    name: string;
    label: string;
};

export interface CategoriesSliceState {
    filters: FiltersItem[];
    filtersLoadingStatus: "loading" | "idle" | "error";
    activeFilter: string;
}
