import {AccordionContent} from "../accordion/AccordionContent.tsx";
import {DimensionsContent} from "../accordion/DimensionsContent.tsx";
import {ReviewsContent} from "../accordion/ReviewsContent.tsx";
import {MetaContent} from "../accordion/MetaContent.tsx";
import type {IDimensions, IMeta, IReview} from "../../models/product.ts";
import type {FC} from "react";

type DetailsProps = {
    category: string;
    tags: string[];
    sku: string;
    weight: number;
    dimensions: IDimensions;
    warrantyInformation: string;
    shippingInformation: string;
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: IMeta;
    reviews: IReview[];
}
export const Details: FC<DetailsProps> = ({category, reviews, meta, shippingInformation, warrantyInformation, weight, minimumOrderQuantity, sku, tags, dimensions, returnPolicy}) => {
    const tagAr = tags.join(', ');
    return (
        <div className="text-left pl-10">
            <p>Category: <strong>{category}</strong></p>
            <p>Tags: <strong>{tagAr}</strong></p>
            <p>SKU: <strong>{sku}</strong></p>
            <p>Weight: <strong>{weight}kg</strong></p>
            <p>Warranty Information: <strong>{warrantyInformation}</strong></p>
            <p>Shipping Information: <strong>{shippingInformation}</strong></p>
            <p>Return Policy: <strong>{returnPolicy}</strong></p>
            <p>Minimum Order Quantity: <strong>{minimumOrderQuantity}</strong></p>
            <AccordionContent title={"Dimensions: "}>
                <DimensionsContent dimensions={dimensions}/>
            </AccordionContent>
            <AccordionContent title={"Reviews: "}>
                <ReviewsContent reviews={reviews}/>
            </AccordionContent>
            <AccordionContent title={"Meta: "}>
                <MetaContent meta={meta}/>
            </AccordionContent>
        </div>
    );
};