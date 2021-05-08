import React, { useEffect, useContext } from "react";
import {
  patchProductAmount,
  patchPurchaseProduct,
} from "../../services/generalApi/productsApi";
import { postPurchase } from "../../services/generalApi/purchaseApi";
import { AppContext } from "../../App";

function Cart(props) {
  const appContext = useContext(AppContext);
  const { CartItems, setCartItems, setShowCart } = props.productsObj;
  useEffect(() => {});

  const totalPrice = () => {
    let total = 0;
    if (CartItems)
      CartItems.map((item, i) => {
        let value = parseFloat(item.price);
        return (total += value);
      });
    return total;
  };

  async function handleDel(item, i) {
    const { data } = await patchProductAmount(item._id, "-");

    if (data._id) {
      appContext.productsDispatch({
        type: "patch_amount_ordered",
        payload: data,
      });
      setCartItems(CartItems.filter((item, index) => index !== i));
    }
  }
  async function handlePay() {
    console.log(CartItems);
    for (let i in CartItems) {
      const { data } = await patchPurchaseProduct(CartItems[i]._id);
      if (data)
        appContext.productsDispatch({
          type: "patch_amount_ordered",
          payload: data,
        });
    }
    const total = totalPrice();
    const items = await CartItems.map((item) => {
      let counter = 0;
      CartItems.map((i) => {
        if (i._id === item._id) counter += 1;
        return i;
      });
      return {
        id: item._id,
        title: item.title,
        price: item.price,
        amount: counter,
      };
    });
    const products = [];
    items.map((item, i) => {
      if (!products.find(({ id }) => id === item.id)) products.push(item);
      return item;
    });
    postPurchase({ products, total });
    setCartItems([]);
    setShowCart(false);
  }

  return (
    <div className="cart_container">
      {CartItems &&
        CartItems.map((item, i) => {
          return (
            <div key={i}>
              <div className="item">
                <span className="title">{item.title}</span>
                <span className="price">{item.price}$</span>
                <span
                  className="del"
                  onClick={() => {
                    handleDel(item, i);
                  }}
                >
                  x
                </span>
              </div>
            </div>
          );
        })}
      <br />
      <div className="total_price">
        <p>Total</p>
        <span>{`${totalPrice()}$`}</span>
      </div>
      <br />
      {CartItems.length > 0 && (
        <button
          type="button"
          onClick={() => {
            handlePay();
          }}
        >
          Pay
        </button>
      )}
    </div>
  );
}

export default Cart;
