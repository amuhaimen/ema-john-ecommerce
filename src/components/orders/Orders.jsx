import { useState } from "react";
import Cart from "../Cart/Cart.jsx";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../reviewItem/ReviewItem.jsx";
import "../orders/orders.css";
import { removeFromDb } from "../../utilities/fakedb.js";

const Orders = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);
  // console.log(savedCart);
  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Orders;
