import { TCategory } from "./category.type";

export type TProduct = {
    id: string;
    productName: string;
    description: string;
    price: number;
    stock: number;
    images: string[];
    category: TCategory;
    isDeleted: boolean;
};
