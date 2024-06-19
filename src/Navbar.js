import React, { useState } from "react";
import "../src/PagesCss/CartIcon.css";
import Cart from "./Pages/Cart";
import { NavLink } from "react-router-dom";
import CartIcon from "./Pages/CartIcon";
import { useSelector } from "react-redux";

const Navbar = ({ props }) => {
  const state = useSelector((state) => state.handleCart);

  return (
    <div
      style={{
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <NavLink to="/Products">
        <img
          style={{ display: "block", width: "40%" }}
          src="data:image/png;base64,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"
        />
      </NavLink>

      <NavLink to="/cart">
        <div style={{ marginTop: "10px" }}>
          <CartIcon props={state.length} />
        </div>
      </NavLink>
    </div>
  );
};

export default Navbar;
