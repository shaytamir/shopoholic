import React, { useState, useEffect } from "react";
import Cart from "./cart";
import Products from "./products";

function Home() {
  const [showCart, setShowCart] = useState(false);
  const [CartCounter, setCartCounter] = useState(0);
  const [CartItems, setCartItems] = useState([]);

  const productsObj = {
    CartCounter,
    setCartCounter: setCartCounter,
    CartItems,
    setCartItems: setCartItems,
    setShowCart: setShowCart,
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart"));

    setCartItems(items);
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(CartItems ? CartItems : []));
    let len = CartItems ? CartItems.length : 0;
    setCartCounter(len);
  }, [CartItems]);

  return (
    <div className="home_container">
      <div className="cart_div">
        <button
          type="button"
          onClick={(e) => {
            setShowCart(!showCart);
          }}
        >
          <span>Shoping Cart</span>
          {CartCounter > 0 ? (
            <span>
              <p>{CartCounter}</p>
            </span>
          ) : null}
        </button>
        {showCart && (
          <div className="cart">
            <Cart productsObj={productsObj} />
          </div>
        )}
      </div>
      <Products productsObj={productsObj} />
    </div>
  );
}

export default Home;
