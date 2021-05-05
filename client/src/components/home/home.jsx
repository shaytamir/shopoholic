import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import { patchProductAmount } from "../../services/generalApi/productsApi";
import { imgUrl } from "../../config.json";

function Home() {
  const appContext = useContext(AppContext);
  const products = appContext.productsState.products;
  const [CartCounter, setCartCounter] = useState(0);
  console.log(products);

  const handleBtn = async (id) => {
    const { data } = await patchProductAmount(id);
    console.log(data);
    if (data._id) {
      appContext.productsDispatch({
        type: "patch_amount_ordered",
        payload: data,
      });
      setCartCounter(CartCounter + 1);
    }
  };

  return (
    <div className="home_container">
      <div className="cart_div">
        <button
          type="button"
          onClick={(e) => {
            // handleBtn(e);
          }}
        >
          <span>Shoping Cart</span>
          {CartCounter > 0 ? (
            <span>
              <p>{CartCounter}</p>
            </span>
          ) : null}
        </button>
      </div>
      <div className="products_div">
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
      </div>
    </div>
  );
}

export default Home;
