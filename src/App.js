import "./App.css";

import Source from "./Source";
import Box from "./Box";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Box defaultCity="Kyiv" />

        <Source />
      </div>
    </div>
  );
}

export default App;
