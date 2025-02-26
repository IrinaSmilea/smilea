export interface Category {
    id: string;
    displayName: string;
    categoryName?: string;
}

export interface CategoriesProps {
    categories: Category[];
}
