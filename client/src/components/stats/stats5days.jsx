import React, { useEffect } from "react";
import { stats5daysFunk } from "../../services/utils/utils";

function Stats5days(props) {
  const { statsState, statsDispatch } = props.stats;
  useEffect(() => {
    stats();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function stats() {
    const newArr = stats5daysFunk(statsState.purchases);
    console.log(newArr);
    statsDispatch({ type: "getstats5says", payload: newArr });
  }
  return (
    <div className="card_main">
      {statsState.stats5days.length > 0 &&
        statsState.stats5days.map((item, i) => (
          <div key={i} className="item">
            <span>{item.date}</span>
            <span>{item.total.toFixed(2)}$</span>
          </div>
        ))}
    </div>
  );
}

export default Stats5days;
