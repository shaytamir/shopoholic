// import React from 'react'
import React, { useEffect } from "react";
import { unique5Funk } from "../../services/utils/utils";

function Unique5(props) {
  const { statsState, statsDispatch } = props.stats;
  useEffect(() => {
    let arr = [];
    for (let product of statsState.purchases) {
      arr.push(...product.products);
    }
    let payload = unique5Funk(arr);
    statsDispatch({ type: "getUnique5", payload: payload });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="card_main">
      {statsState.unique5.length > 0 &&
        statsState.unique5.map((item, i) => (
          <div key={i} className="item">
            <span>{item.title}</span>
            <span>{item.unique}</span>
          </div>
        ))}
    </div>
  );
}

export default Unique5;
