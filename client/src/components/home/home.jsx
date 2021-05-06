import React, { useState, useEffect } from "react";
// import { AppContext } from "../../App";
// import { patchProductAmount } from "../../services/generalApi/productsApi";
// import { imgUrl } from "../../config.json";
import Cart from "./cart";
import Products from "./products";

function Home() {
  // const appContext = useContext(AppContext);
  // const products = appContext.productsState.products;
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
    // const items = JSON.parse(sessionStorage.getItem("cart"));
    setCartItems(items);
    // setCartCounter(items.length);
  }, []);
  useEffect(() => {
    console.log(CartItems);
    console.log(typeof CartItems);
    // sessionStorage.setItem("cart", JSON.stringify(CartItems ? CartItems : []));

    localStorage.setItem("cart", JSON.stringify(CartItems ? CartItems : []));
    let len = CartItems ? CartItems.length : 0;
    setCartCounter(len);
  }, [CartItems]);
  // console.log(products);

  // const handleBtn = async (id) => {
  //   const { data } = await patchProductAmount(id);
  //   console.log(data);
  //   if (data._id) {
  //     appContext.productsDispatch({
  //       type: "patch_amount_ordered",
  //       payload: data,
  //     });
  //     setCartCounter(CartCounter + 1);
  //   }
  // };

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
      {/* <Products CartCounter={CartCounter} setCartCounter={setCartCounter} /> */}
      <Products productsObj={productsObj} />
      {/* <div className="products_div">
        {products && !products.length && <div>no products yet</div>}
        {products &&
          products.length > 0 &&
          products.map((product, i) => (
            <div key={i} className="product_box">
              <div className="img_div">
                <img src={product.image} alt={product.desc} />
              </div>
              <div className="info_div">
                <p>{product.title}</p>
                <p>{product.desc}</p>
                <p>{product.price}$</p>
              </div>
              <div className="btn_div">
                {product.amount !== product.amount_ordered && (
                  <button
                    onClick={() => {
                      handleBtn(product._id);
                    }}
                  >
                    Buy
                  </button>
                )}
              </div>
              {product.amount === product.amount_ordered && (
                <div className="sold_out">
                  <img src={imgUrl + "/sold_out.png"} alt="" />
                </div>
              )}
            </div>
          ))}
      </div> */}
    </div>
  );
}

export default Home;
