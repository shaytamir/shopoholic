import React, { useEffect, useState } from "react";
import "./App.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppRouter from "./components/appRouter";

export const appContext = React.createContext();
function App() {
  return (
    <div className="App">
      <appContext.Provider value={{}}>
        <header>
          {/* messages */}
          <ToastContainer />
        </header>
        <div className="demo_header"></div>

        <main className="main">
          <AppRouter />
        </main>
        <footer></footer>
      </appContext.Provider>
    </div>
  );
}

export default App;
