import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  const incQty = () => {
    setQty(qty + 1);
  };
  const decQty = () => {
    setQty((prev) => {
      if (qty < 2) {
        return 1;
      }
      return prev - 1;
    });
  };

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );

    setTotalPrice(totalPrice + product.price * quantity);
    setTotalQuantities(totalQuantities + quantity);

    if (checkProductInCart) {
      let updatedCartItems = cartItems.map((item) => {
        if (item._id === product._id) {
          return { ...item, quantity: quantity + item.quantity };
        }
        return item;
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} added to the cart`);
  };

  const onRemove = (product) => {
    let updatedCartItems = cartItems.filter((item) => item._id !== product._id);

    setCartItems(updatedCartItems);
    setTotalPrice(totalPrice - product.price * product.quantity);
    setTotalQuantities(totalQuantities - product.quantity);
  };

  const toggleCartItemQuantity = (product, operation) => {
    let foundProduct = cartItems.find((item) => item._id === product._id);
    let index = cartItems.findIndex((item) => product._id === item._id);

    if (operation === "inc") {
      cartItems[index] = {
        ...foundProduct,
        quantity: foundProduct.quantity + 1,
      };
      setCartItems(cartItems);

      setTotalQuantities(totalQuantities + 1);
      setTotalPrice(totalPrice + foundProduct.price);
    } else if (operation === "dec") {
      if (foundProduct.quantity >= 1) {
        cartItems[index] = {
          ...foundProduct,
          quantity: foundProduct.quantity - 1,
        };
        setCartItems(cartItems);

        setTotalQuantities(totalQuantities - 1);
        setTotalPrice(totalPrice - foundProduct.price);
      }

      if (foundProduct.quantity <= 1) {
        setTimeout(() => {
          onRemove(foundProduct);
        }, 400);
      }
    }
  };

  return (
    <context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        setQty,
        incQty,
        decQty,
        onAdd,
        onRemove,
        setShowCart,
        setShowCart,
        toggleCartItemQuantity,
      }}
    >
      {children}
    </context.Provider>
  );
};

export const useStateContext = () => useContext(context);
