import "./styles.css";
import useApi from "./hooks/useApi";

function App() {
  const { loading, data } = useApi(`https://series-isdi.herokuapp.com/series`);
  if (loading) return <h1>Loading</h1>;

  return (
    <div>
      <h1>Data fetched successfully</h1>
      {JSON.stringify(data)}
    </div>
  );
}

export default App;
