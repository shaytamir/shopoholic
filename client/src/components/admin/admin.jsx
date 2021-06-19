import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import { swalConfitm } from "../../services/utils/utils";
import { DeleteProduct } from "../../services/generalApi/productsApi";
import EditProduct from "./editProduct";
import AddProduct from "./addProduct";
// import Products from "../home/products";
import Product from "../admin/product";

function Admin() {
  const appContext = useContext(AppContext);
  const [Show_AddProducts, setShow_AddProducts] = useState(false);
  const [Show_EditProducts, setShow_EditProducts] = useState("");
  const products = appContext.productsState.products;

  const handleDelete = async (id) => {
    const confirm = await swalConfitm();
    if (confirm) {
      const res = await DeleteProduct(id);
      if (res.data) {
        appContext.productsDispatch({ type: "DELETE_Product", payload: id });
      }
    }
  };
  // const handleEdit = async (id) => {
  //   setShow_EditProducts(id);
  // };

  return (
    <div className="Admin_container">
      <div className="add_div">
        <button
          type="button"
          onClick={() => {
            setShow_AddProducts(true);
          }}
        >
          Add
        </button>
      </div>
      <div className="products_div">
        {products && !products.length && <div>no products yet</div>}
        {products && products.length > 0 && (
          <table cellSpacing="0">
            <thead>
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, i) => (
                <tr key={i}>
                  <td>{product.title}</td>
                  <td>{product.price}$</td>
                  <td>{product.desc}</td>
                  <td>{product.amount}</td>
                  <td>
                    <div className="btn_div">
                      <button
                        type="button"
                        onClick={() => {
                          handleDelete(product._id);
                        }}
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setShow_EditProducts(product._id);
                        }}
                      >
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {Show_AddProducts && (
        <div className="popUp">
          <AddProduct
            setShowPopup={setShow_AddProducts}
            dispatch={appContext.productsDispatch}
          />
          <Product
            setShowPopup={setShow_EditProducts}
            dispatch={appContext.productsDispatch}
            // productId={Show_EditProducts}
          />
        </div>
      )}
      {Show_EditProducts && (
        <div className="popUp">
          {/* <EditProduct
            setShowPopup={setShow_EditProducts}
            dispatch={appContext.productsDispatch}
            productId={Show_EditProducts}
          /> */}
          <Product
            setShowPopup={setShow_EditProducts}
            dispatch={appContext.productsDispatch}
            productId={Show_EditProducts}
          />
        </div>
      )}
    </div>
  );
}

export default Admin;
