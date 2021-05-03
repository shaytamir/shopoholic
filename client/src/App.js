import React, { useEffect, useReducer } from "react";
import "./App.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppRouter from "./components/appRouter";
import {
  productsReducer,
  initialProducts,
} from "./services/reducers/productsReducer";
import { getProducts } from "./services/generalApi/productsApi";

export const AppContext = React.createContext();
function App() {
  const [productsState, productsDispatch] = useReducer(
    productsReducer,
    initialProducts
  );

  const shopProducts = async () => {
    const shop_products = await getProducts();
    productsDispatch({ type: "SET_Products", payload: shop_products });
  };

  useEffect(() => {
    shopProducts();
  }, []);

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          productsState: productsState,
          productsDispatch: productsDispatch,
        }}
      >
        <header>
          {/* messages */}
          <ToastContainer />
        </header>
        <div className="demo_header"></div>

        <main className="main">
          <AppRouter />
        </main>
        <footer></footer>
      </AppContext.Provider>
    </div>
  );
}

export default App;
