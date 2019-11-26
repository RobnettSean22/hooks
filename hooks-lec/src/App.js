import React from "react";
import Pokemon from "./Components/Pokemon2";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Pokemon url="https://pokeapi.co/api/v2/pokemon/31" />
      <Pokemon url="https://pokeapi.co/api/v2/pokemon/300" />
      <Pokemon url="https://pokeapi.co/api/v2/pokemon/3" />
    </div>
  );
}

export default App;
