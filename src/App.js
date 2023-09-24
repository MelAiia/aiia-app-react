import "./App.css";
import Weather from "./Weather";
import Source from "./Source";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather app by Aiia</h1>
        <Weather />
        <Source />
      </div>
    </div>
  );
}

export default App;
