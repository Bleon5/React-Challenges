import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container mx-auto text-white flex justify-between items-center py-5">
      <Link to="/" className="text-3xl">
        eCommerce🤑
      </Link>
      <div className="buttons flex gap-3">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
}

export default Header;
