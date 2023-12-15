import React from "react";
import "./header.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Order</Link>
        <Link to="/inventory">Manage Inventory</Link>
        <Link to="/login">Log in</Link>
      </div>
    </nav>
  );
};

export default Header;
