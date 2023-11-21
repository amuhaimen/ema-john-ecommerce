import React from "react";
import "./header.css";
import logo from "../../images/logo.svg";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <a href="/order">Order</a>
        <a href="/order-review">Order Review</a>
        <a href="/manage-inventory">Manage Inventory</a>
        <a href="/login">Log in</a>
      </div>
    </nav>
  );
};

export default Header;
