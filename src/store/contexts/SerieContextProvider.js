import { useReducer } from "react";
import SeriesContext from "./SeriesContext";
import seriesCardsReducer from "../reducers/seriesCardsReducer";

const SeriesContextProvider = ({ children }) => {
  const [seriesCards, dispatch] = useReducer(seriesCardsReducer, []);

  return (
    <SeriesContext.Provider value={{ seriesCards, dispatch }}>
      {children}
    </SeriesContext.Provider>
  );
};

export default SeriesContextProvider;
