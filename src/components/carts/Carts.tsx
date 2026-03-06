import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {getData} from "../../services/services.ts";
import type {ICart} from "../../models/cart.ts";
import type {BaseResponseType} from "../../models/baseResponse.ts";
import {Cart} from "./Cart.tsx";

export const Carts = () => {
    const [carts, setCarts] = useState<ICart[]>([]);
    const {id} = useParams();

    useEffect(() => {
        if(id){
            getData<BaseResponseType & {carts:ICart[]}>(`/users/${id}/carts`).then(({carts})=>setCarts(carts))
        }
    },[id]);

    return (
        <div className={'flex justify-center'}>{
            carts.length > 0 ?
                (carts.map(cart=><Cart key={cart.id} cart={cart}/>))
                : (<p>No products yet</p>)
            }
        </div>
    );
};