import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import "../PagesCss/Loading.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartAction";
import "../PagesCss/ProductDetails.css";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getProduct = async () => {
      fetch(`https://fakestoreapi.com/products/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
          setLoading(false);
        });
    };

    getProduct();
  }, []);

  const dispatch = useDispatch();

  const addProduct = (produc) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <Navbar />
      {loading ? (
        <>
          <div id="loading"></div>
        </>
      ) : (
        <div id="prod-detail">
          <div id="img-container">
            <img style={{ width: "50%", }} src={product.image} />
          </div>
          <div id="detail-container" >
            <h4>{product.category}</h4>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <div style={{ width: "50%", display: "flex" }}>
              <p>Rating⭐ {product.rating && product.rating.rate} | </p>
              <p> &nbsp;{product.id}</p>
            </div>
            <h3>Price: ₹{product.price}</h3>
            <button
              id="cart-btn"
              onClick={() => addProduct(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
