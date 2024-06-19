import React, { useState } from "react";
import "../PagesCss/Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    const data = { username: formData.username, password: formData.password };

    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      const result = await response.json();
      if (result.token) {
        localStorage.setItem("token", result.token);
        alert("Login Successful");
      }
      navigate("/products");
    } catch (error) {
      console.error("Error:", error);
      alert("Please enter a valid Details");
    }
  };

  return (
    <div id="log">
      <input
        type="text"
        name="username"
        value={formData.username}
        placeholder="Username"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        placeholder="Password"
        onChange={handleChange}
      />
      <div id="log-container">
        <button id="login-btn" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
