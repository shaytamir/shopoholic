import React, { useContext } from "react";
import { AppContext } from "../../App";
import { patchProductAmount } from "../../services/generalApi/productsApi";
import { imgUrl } from "../../config.json";

function Products(props) {
  const appContext = useContext(AppContext);
  const products = appContext.productsState.products;

  //   const CartItems = localStorage.getItem("cart");
  //   console.log(CartItems);

  //   console.log(productsObj);
  const {
    CartCounter,
    setCartCounter,
    CartItems,
    setCartItems,
  } = props.productsObj;

  const handleBtn = async (product) => {
    const { data } = await patchProductAmount(product._id, "+");
    if (data._id) {
      appContext.productsDispatch({
        type: "patch_amount_ordered",
        payload: data,
      });
      if (!CartItems) {
        setCartItems([product]);
      } else {
        setCartItems([...CartItems, product]);
      }
      //   setCartCounter(CartCounter + 1);
    }
  };
  return (
    <div>
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
                      handleBtn(product);
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

export default Products;
