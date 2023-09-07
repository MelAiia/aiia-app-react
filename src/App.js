import "./App.css";
import Weather from "./Weather";
import Source from "./Source";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Source />
        <h1>Weather app by Aiia</h1>
        <Weather />
      </header>
    </div>
  );
}

export default App;
