import { useState } from "react";
import "./App.css";
import Children from "./components/Children";
import { CountContextNewProvider } from "./Contexts/CountContextNew";

function App() {

  return (
    // <CountContext.Provider value={[count,setCount]}>
    <CountContextNewProvider>
      <Children />
    </CountContextNewProvider>
    // </CountContext.Provider>
    // Apps
    // Children
    // Sub children
    // Grand children 1, 2
  );
}

export default App;
