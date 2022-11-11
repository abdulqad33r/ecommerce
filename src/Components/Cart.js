import React, { useEffect } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { urlFor } from "../client";
import { useStateContext } from "./Context/StateContext";

const Cart = () => {
  const {
    setShowCart,
    totalQuantities,
    cartItems,
    toggleCartItemQuantity,
    onRemove,
    totalPrice,
  } = useStateContext();

  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <button onClick={() => setShowCart(false)} className="cart-backBtn">
          <AiOutlineLeft />
          <p>Your cart</p>
          <p>({totalQuantities})</p>
        </button>

        {cartItems.map((item) => (
          <div className="cart-product-details">
            <img
              src={urlFor(item?.image[0])}
              width={120}
              height={120}
              key={item._id}
              alt=""
            />
            <div className="cart-product-details-texts">
              <div className="cart-product-name_quantity">
                <p>{item.name}</p>
                <div className="cart-counter">
                  <button onClick={() => toggleCartItemQuantity(item, "dec")}>
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button onClick={() => toggleCartItemQuantity(item, "inc")}>
                    +
                  </button>
                </div>
              </div>

              <div className="cart-product-price_delete">
                <p>${item.price}</p>
                <p>
                  <TiDeleteOutline
                    className="delete"
                    onClick={() => onRemove(item)}
                  />
                </p>
              </div>
            </div>
          </div>
        ))}

        {totalPrice !== 0 ? (
          <div className="subTotal">
            <p>Subtotal: </p>
            <p>${totalPrice}</p>
          </div>
        ) : (
          cartItems.length !== 0 && (
            <p className="subTotal">
              <p>Subtotal: </p>
              <p>0</p>
            </p>
          )
        )}

        {cartItems.length === 0 && (
          <div className="emptyCart">
            <p>Your cart is empty</p>

            <Link to="/">
              <button onClick={() => setShowCart(false)}>
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
