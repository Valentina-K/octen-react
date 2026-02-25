export interface IProduct{
    "id": number,
    "title": string,
    "description": string,
    "category": string,
    "price": number,
    "discountPercentage": number,
    "rating": number,
    "stock": number,
    "tags": string[],
    "brand": string,
    "sku": string,
    "weight": number,
    "dimensions": IDimensions,
    "warrantyInformation": string,
    "shippingInformation": string,
    "availabilityStatus": string,
    "reviews": IReview[],
    "returnPolicy": string,
    "minimumOrderQuantity": number,
    "meta": IMeta,
    "images": string[],
    "thumbnail": string,
}

export interface IDimensions {
	depth: number;
	width: number;
	height: number;
}
export interface IReview {
	date: string;
	reviewerName: string;
	reviewerEmail: string;
	rating: number;
	comment: string;
}
export interface IMeta {
	createdAt: string;
	qrCode: string;
	barcode: string;
	updatedAt: string;
}







