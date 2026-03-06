import type {IProduct} from "./product.ts";

export interface ICart {
	discountedTotal: number;
	total: number;
	totalQuantity: number;
	totalProducts: number;
	id: number;
	userId: number;
	products: IProduct[];
}

