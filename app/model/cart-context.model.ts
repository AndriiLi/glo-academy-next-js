import { CartItem } from "./cart-item.model";
import { Product } from "./product.model";


export interface CartContextType {
    isOpen: boolean,
    cartItems: CartItem[];
    setOpen: (value: boolean) => void;
    addToCart: (product: Product) => void;
    deleteToCart: (product: Product) => void;
}