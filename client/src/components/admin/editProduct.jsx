import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../App";

import { validateProductSchema } from "../../services/schema/product";
import { patchProduct } from "../../services/generalApi/productsApi";

function EditProduct(props) {
  const { setShowPopup, dispatch, productId } = props;
  const appContext = useContext(AppContext);

  const [Error, setError] = useState("");
  const [Product, setProduct] = useState({});
  const products = appContext.productsState.products;

  useEffect(() => {
    const temp = products.filter((product) => {
      return product._id === productId;
    });
    setProduct(temp[0]);
  }, [productId, products]);

  async function doSubmit(e) {
    const obj = {
      title: e.target.title.value,
      desc: e.target.desc.value,
      price: e.target.price.value,
      amount: e.target.amount.value,
      image: e.target.image.value,
    };
    const { error } = validateProductSchema(obj);
    if (error) {
      setError("please set a title and a price");
    } else if (!error) {
      const { data } = await patchProduct(obj, productId);
      if (data) {
        dispatch({ type: "PATCH_Product", payload: { obj, productId } });
      }

      setShowPopup("");
    }
  }
  return (
    <div className="popUp_container">
      <div className="product_popUp">
        <h2>Edit Product</h2>
        <form
          //   name="product_form"
          id="product_form"
          onSubmit={(e) => {
            e.preventDefault();

            doSubmit(e);
          }}
        >
          <div className="imput_div">
            <label htmlFor="title">* Title</label>
            <input
              type="text"
              name="title"
              id="title"
              defaultValue={Product.title}
            />
          </div>
          <div className="imput_div">
            <label htmlFor="desc">Desc</label>
            <input
              type="text"
              name="desc"
              id="desc"
              defaultValue={Product.desc}
            />
          </div>
          <div className="imput_div">
            <label htmlFor="price">* Price</label>
            <input
              type="number"
              name="price"
              id="Price"
              step="0.01"
              placeholder="0.00"
              defaultValue={Product.price}
            />
          </div>
          <div className="imput_div">
            <label htmlFor="amount">* amount</label>
            <input
              type="number"
              name="amount"
              id="amount"
              step="1"
              placeholder="0"
            />
          </div>
          <div className="imput_div">
            <label htmlFor="image">Image Url</label>
            <input
              type="text"
              name="image"
              id="image"
              defaultValue={Product.image}
            />
          </div>

          <div className="error_div">
            <p>{Error}</p>
          </div>
        </form>

        <div className="btn_div">
          <button
            type="button"
            className="cancel"
            onClick={() => {
              setShowPopup(false);
            }}
          >
            Cancel
          </button>
          <button form="product_form" type="submit">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
