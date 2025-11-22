'use client';


import { Product } from "../model/product.model";
import { useCart } from "../providers/CartProvider";

export default function addToCartBtn({product}: {product: Product}) {
     const {addToCart} = useCart();

    return (
       <button className="btn btn-primary" onClick={() => addToCart(product)}>В корзину</button>
    );
}