import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useStateContext } from "./Context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar">
      <Link to="/">
        <p className="logo">Ecommerce</p>
      </Link>

      <div>
        <p className="cart" onClick={() => setShowCart(true)}>
          <AiOutlineShoppingCart />
          <span className="cart-items-counter">{totalQuantities}</span>
        </p>
      </div>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
