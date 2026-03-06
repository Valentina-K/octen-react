import type {ICart} from "../../models/cart.ts";
import {type FC} from "react";
import {NavLink} from "react-router";

type CartProps = {
    cart: ICart;
}
export const Cart: FC<CartProps> = ({cart}) => {
    return (
        <div className={`relative bg-lime-100 rounded-2xl p-3.5 w-1/3 h-full overflow-y-auto`} >
            <NavLink to={'/octen-react/users'} className={'absolute top-3.5 right-8 font-medium'}>Back</NavLink>
            <p>Total products: <b>{cart.totalProducts}</b></p>
            <p>Total quantity: <b>{cart.totalQuantity}</b></p>
            <p>Total: <b>{cart.total}</b></p>
            <p>Discounted total: <b>{cart.discountedTotal}</b></p>
            <div className={'flex flex-col gap-2'}><span className={'text-lg font-semibold italic'}>Cart:</span>
                {cart.products.map(product => <div className={'ml-2.5'}>
                    <p className={'font-semibold'}>{product.title}</p>
                    <p>Price: <b>{product.price}</b></p>
                    <p>Quantity: <b>{product.quantity}</b></p>
                    <p>Total: <b>{product.total.toFixed(2)}</b></p>
                    <p>Discount Percentage: <b>{product.discountPercentage}</b></p>
                    <p>Discounted Total <b>{product.discountedTotal}</b></p>
                </div>)}
            </div>
        </div>
    );
};

