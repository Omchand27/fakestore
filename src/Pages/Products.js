import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { NavLink } from "react-router-dom";
import "../PagesCss/Product.css";

const Product = () => {
  const [productData, setProductData] = useState([]);

  const prevCart = JSON.parse(localStorage.getItem("products"));

  const [cart, setCart] = useState(prevCart || []);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          setProductData(data);
          console.log(data);
        });
    };

    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(cart));
    console.log("inside", cart);
  }, [cart]);

  return (
    <>
      <Navbar props={cart.length} />
      <div id="prod-container">
        {productData.map((e) => (
          <div className="prod-box" key={e.id}>
            <img style={{ width: "40%", height: "20vh" }} src={e.image} />
            <div style={{ width: "fit", height: "10vh" }}>
              <p style={{ fontWeight: "bold" }}>{e.title}</p>
            </div>

            <div style={{ width: "50%", display: "flex" }}>
              <p>Rating ⭐{e.rating.rate + "|"}</p>
              <p>{e.rating.count}</p>
            </div>

            <h3 style={{ fontWeight: "bold" }}>Price ₹{e.price}</h3>
            <p style={{ fontWeight: "bold" }}>Category - {e.category}</p>
            <NavLink to={`/products/${e.id}`} style={{display:"block", width:"80%", margin:"auto"}}>
              <button id="buy">Buy Now</button>
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
