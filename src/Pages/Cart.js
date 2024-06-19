import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions/cartAction";
import Navbar from "../Navbar";
import "../PagesCss/Cart.css";

const Cart = () => {
  const cart = useSelector((state) => state.handleCart) || [];

  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  var price = 0;

  cart.map((e) => {
    price = price + e.price * e.qty;
  });

  return (
    <div>
      <Navbar />
      <div
        style={{
          display:"flex",
          width: "25%",
          margin: "auto",
          marginBottom: "5%",
          justifyContent:"space-around"
        }}
      >
        <h1 style={{ justifyContent: "center" }}>Cart Total: </h1><h1>₹{price}</h1>
      </div>
      <div id="cart-container">
        {cart.map((item) => (
          <div
            id="one-product"
            key={item.id}
            style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <img style={{ width: "20%" }} src={item.image} />
            <h2>{item.title}</h2>
            <p>
            ₹{item.price} x {item.qty} {item.price * item.qty}
            </p>
            <div
              style={{
                display: "flex",
                width: "50%",
                margin: "auto",
                justifyContent: "center",
              }}
            >
              <button
                className="min-plus"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                -
              </button>
              <h1
                style={{
                  margin: "auto",
                  fontSize: "25px",
                  border: "1px solid red",
                }}
              >
                {item.qty}
              </h1>
              <button
                className="min-plus"
                onClick={() => handleAddToCart(item)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
