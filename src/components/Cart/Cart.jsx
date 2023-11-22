import React from "react";
import "./cart.css";

const Cart = ({ cart }) => {
  // const cart=props.cart  (option-1)
  //const {cart}=props (option-2)

  let total = 0;
  for (const product of cart) {
    total = total + product.price;
  }

  return (
    <div className="cart">
      <h3>cart summary</h3>
      <p>selected items:{cart.length}</p>
      <p>Total Price:${total}</p>
      <p>Total Shipping charge:</p>
      <p>Tax:$</p>
      <h6>Grand Total: </h6>
    </div>
  );
};

export default Cart;
