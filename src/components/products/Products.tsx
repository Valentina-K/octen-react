import {useEffect, useState} from "react";
import type {IProduct} from "../../models/product.ts";
import {getProducts} from "../../services/services.ts";
import {Product} from "../product/Product.tsx";

export const Products = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    console.log(products);
    useEffect(() => {
        function getAllProduct(){
            getProducts().then(result=>setProducts(result));
        }
        getAllProduct();
    },[])
    return (<div className="flex flex-wrap gap-5 justify-center">
        {products.map((product: IProduct) =>
            (<Product key={product.id} product={product} />)
        )}
    </div>);
};