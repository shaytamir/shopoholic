export const initialStats = {
  purchases: [],
  top5: [],
  unique5: [],
  stats5days: [],
};

export const statsReducer = (state, action) => {
  switch (action.type) {
    case "getPurchases":
      return { ...state, purchases: action.payload };

    case "getTop5":
      return { ...state, top5: action.payload };

    case "getUnique5":
      return { ...state, unique5: action.payload };

    case "getstats5says":
      return { ...state, stats5days: action.payload };

    default:
      return state;
  }
};
