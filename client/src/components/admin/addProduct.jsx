import React, { useState } from "react";
import { validateProductSchema } from "../../services/schema/product";
import { postProduct } from "../../services/generalApi/productsApi";

function AddProduct(props) {
  const { setShowPopup, dispatch } = props;
  const [Error, setError] = useState("");

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
      const { data } = await postProduct(obj);
      obj._id = data._id;
      dispatch({ type: "ADD_Product", payload: obj });
      setShowPopup(false);
    }
  }
  return (
    <div className="popUp_container">
      <div className="product_popUp">
        <h2>Add Product</h2>
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
            <input type="text" name="title" id="title" />
          </div>
          <div className="imput_div">
            <label htmlFor="desc">Desc</label>
            <input type="text" name="desc" id="desc" />
          </div>
          <div className="imput_div">
            <label htmlFor="price">* Price</label>
            <input
              type="number"
              name="price"
              id="Price"
              step="0.01"
              placeholder="0.00"
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
            <input type="text" name="image" id="image" />
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
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
