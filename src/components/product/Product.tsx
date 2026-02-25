import type {IProduct} from "../../models/product.ts";
import {type FC, useState} from "react";
import './styles.css';
import {Modal} from "../modal/Modal.tsx";
import {Details} from "../details/Details.tsx";

type ProductProps = {
    product: IProduct;
}

export const Product: FC<ProductProps> = ({product}) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const newPrice: number = Math.round((product.price - product.discountPercentage * (product.price / 100)) * 100) / 100;
    const isSale = newPrice !== product.price;
    return (
        <div className="size-1/4 shadow hover:shadow-amber-600 p-3.5 rounded-4xl">
            <img src={product.images[0]} alt={product.title}/>
            <div className="text-right">
                <span className={isSale ? "isSale" : "not-sale"}>${product.price}</span>
                <span className={isSale ? "discountPercent" : "not-sale"}> {product.discountPercentage}%</span>
                <p className="font-semibold text-2xl text-right">${newPrice}</p>
            </div>
            <div className="flex justify-between">
                <p className="italic text-right">{product.availabilityStatus ? "In Stock" : "Not available"}</p>
                <p className="text-left text-xs">Available: {product.stock}</p>
            </div>
            <h3 className="font-semibold text-xl">{product.title}</h3>
            <p className="text-left">Rating: <span className="font-medium text-lg">{product.rating}</span></p>
            <h4 className="text-left underline">Brand: <span className="font-medium text-lg">{product.brand}</span></h4>
            <p className="text-left text mb-2.5">{product.description}</p>
            <button className="block text-amber-950 cursor-pointer font-medium" onClick={() => setShowModal(true)}>Details</button>
            <button className="bg-green-700 p-2.5 rounded-2xl text-amber-50 cursor-pointer shadow hover:shadow-lime-950">Buy now</button>
            {showModal && <Modal onClick={()=> setShowModal(false)}>
                <Details
                    weight={product.weight}
                    reviews={product.reviews}
                    dimensions={product.dimensions}
                    minimumOrderQuantity={product.minimumOrderQuantity}
                    returnPolicy={product.returnPolicy}
                    meta={product.meta}
                    shippingInformation={product.shippingInformation}
                    sku={product.sku}
                    warrantyInformation={product.warrantyInformation}
                    tags={product.tags}
                    category={product.category}
                />
            </Modal>}
        </div>
    );
};