import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { PRODUCTS } from "../../products";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalAmount } = useContext(CartContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();

  return (
    <div className="cart" style={{ margin: "10px" }}>
      <div className="cart-title">
        <h3>Your Cart Items</h3>
      </div>
      <div className="cart-list d-flex flex-wrap gap-5">
        {cartItems.map((item) => {
          const product = PRODUCTS.find((product) => product.id === item.id);
          return <CartItem data={product} qty={item.count} key={product.id} />;
        })}
      </div>
      <div className="card-info d-flex gap-2">
        <p>Subtotal: ${totalAmount}</p>
        <button type="button" className="btn btn-primary">
          Checkout
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};
