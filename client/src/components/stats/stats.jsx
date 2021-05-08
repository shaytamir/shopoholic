import React, { useEffect, useReducer } from "react";
import { getPurchase } from "../../services/generalApi/purchaseApi";

import {
  statsReducer,
  initialStats,
} from "../../services/reducers/statsReducer";
import Top5 from "./top5";
import Unique5 from "./unique5";
import Stats5days from "./stats5days";

function Stats() {
  const [statsState, statsDispatch] = useReducer(statsReducer, initialStats);

  const fetchPurchases = async () => {
    const { data } = await getPurchase();
    statsDispatch({ type: "getPurchases", payload: data });
  };

  useEffect(() => {
    fetchPurchases();
  }, []);

  const stats = {
    statsState,
    statsDispatch,
  };

  // console.log("s.purchases", statsState.purchases);
  // console.log(statsState);

  return (
    <div className="stats_container">
      <div className="stats">
        <div className="card">
          <div className="card_header">Top 5 sells</div>
          <div className="card_main">
            {statsState.purchases.length > 0 && <Top5 stats={stats} />}
          </div>
        </div>
        <div className="card">
          <div className="card_header">Top 5 unique sells</div>
          <div className="card_main">
            {statsState.purchases.length > 0 && <Unique5 stats={stats} />}
          </div>
        </div>
        <div className="card">
          <div className="card_header">Past 5 Days Stats</div>
          <div className="card_main">
            {statsState.purchases.length > 0 && <Stats5days stats={stats} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
