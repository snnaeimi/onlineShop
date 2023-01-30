import React, { useContext } from "react";
import { PRODUCTS } from "../../Products";
import { ShopContext } from "../../context/ShopContext";
import { CartItem } from "./CartItem";
import "./Cart.css";

import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>سبد خرید </h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>جمع خرید: ${totalAmount}</p>
          <button onClick={() => navigate("/")}> بازگشت به صفحه اصلی </button>
          <button> ثبت سفارش </button>
        </div>
      ) : (
        <h1>سبد خرید شما خالی است</h1>
      )}
    </div>
  );
};
