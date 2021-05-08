import React, { useContext } from "react";
import { AppContext } from "../../App";

function Navbar() {
  const appContext = useContext(AppContext);
  const { history } = appContext;

  return (
    <div className="navbar_container">
      <button
        type="button"
        name="home"
        onClick={(e) => {
          history.push(e.target.name);
        }}
      >
        Home
      </button>
      <button
        type="button"
        name="admin"
        onClick={(e) => {
          history.push(e.target.name);
        }}
      >
        Admin
      </button>
      <button
        type="button"
        name="stats"
        onClick={(e) => {
          history.push(e.target.name);
        }}
      >
        Stats
      </button>
    </div>
  );
}

export default Navbar;
