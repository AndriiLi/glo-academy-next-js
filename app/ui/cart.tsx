"use client";

import { CartItem } from "../model/cart-item.model";
import { useCart } from "../providers/CartProvider";

export default function Cart() {
  const { isOpen, setOpen, cartItems, deleteToCart } = useCart();

  const cartTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  return (
    <div className="cart" style={{ display: isOpen ? "flex" : "none" }}>
      <div className="cart-body">
        <div className="cart-title">Корзина</div>
        <div className="cart-total">
          Общая сумма: <span>{cartTotal()}</span> руб
        </div>

        <div className="cart-wrapper">
          {cartItems.length == 0 && <div>Ваша корзина пока пуста</div>}

          {cartItems.map((product: CartItem) => {
            return (
              <div className="card" key={product.id}>
                {product.sale ? (
                  <div className="card-sale">🔥Hot Sale🔥</div>
                ) : (
                  ""
                )}
                <div className="card-img-wrapper">
                  <span
                    className="card-img-top"
                    style={{ backgroundImage: `url(${product.img})` }}
                  ></span>
                </div>
                <div className="card-body justify-content-between">
                  <div className="card-price">
                    {product.price} * {product.quantity} ={" "}
                    {product.price * product.quantity}₽
                  </div>
                  <h5 className="card-title">{product.title}</h5>
                  <button
                    className="btn btn-primary"
                    onClick={() => deleteToCart(product)}
                  >
                    Удалить
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="btn btn-primary cart-confirm"
          onClick={() => setOpen(false)}
        >
          Оформить заказ
        </button>
        <div className="cart-close" onClick={() => setOpen(!isOpen)}></div>
      </div>
    </div>
  );
}
