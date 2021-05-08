// import React from 'react'
import React, { useEffect } from "react";
import { top5Funk } from "../../services/utils/utils";

function Top5(props) {
  const { statsState, statsDispatch } = props.stats;
  useEffect(() => {
    let arr = [];
    for (let product of statsState.purchases) {
      arr.push(...product.products);
    }
    let payload = top5Funk(arr);
    statsDispatch({ type: "getTop5", payload: payload });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="card_main">
      {statsState.top5.length > 0 &&
        statsState.top5.map((item, i) => (
          <div key={i} className="item">
            <span>{item.title}</span>
            <span>{item.amount}</span>
          </div>
        ))}
    </div>
  );
}

export default Top5;
