import React from "react";

const CartIcon = ({ props }) => {
  return (
    <div>
      <div className="cart-icon">
        🛒 <span className="cart-value">{props}</span>
      </div>
    </div>
  );
};

export default CartIcon;
