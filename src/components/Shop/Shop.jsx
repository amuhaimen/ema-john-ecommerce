import React, { useEffect, useState } from "react";
import "./shop.css";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <div className="cart-container">
        <h3>cart summary</h3>
      </div>
    </div>
  );
};

export default Shop;
