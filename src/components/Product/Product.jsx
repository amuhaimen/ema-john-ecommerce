import React from "react";
import "./product.css";

const Product = (props) => {
  const { img, name, seller, quantity, price, ratings } = props.product;
  console.log(props);
  return (
    <div className="product">
      <img src={img} />

      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p>Price:${price}</p>
        <p>Manufacturer : {seller}</p>
        <p>Rating:{ratings}</p>
      </div>
    </div>
  );
};

export default Product;
