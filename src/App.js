import "./styles.css";
import { useEffect, useState } from "react";
import SerieList from "./components/SerieList/serieList";
import SerieInfo from "./components/SerieInfo/serieInfo";

function App() {
  const [series, setSeries] = useState([]);

  const getSeries = async () => {
    const url = "https://series-isdi.herokuapp.com/series";

    const response = await fetch(url);
    const responseJson = await response.json();
    setSeries(responseJson);
  };

  useEffect(() => {
    getSeries();
  }, []);
  return (
    <>
      <SerieInfo />
      <SerieList series={series} />
    </>
  );
}

export default App;
