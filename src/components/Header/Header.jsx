import React from "react";
import "./header.css";
import logo from "../../images/logo.svg";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <a href="/">Shop</a>
        <a href="/orders">Order</a>
        <a href="/inventory">Manage Inventory</a>
        <a href="/login">Log in</a>
      </div>
    </nav>
  );
};

export default Header;
