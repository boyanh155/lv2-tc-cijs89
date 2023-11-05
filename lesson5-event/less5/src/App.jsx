import React, { useState } from "react";
import InputGroup from "./InputGroup";
import List from "./List";
import { data as oldData } from "./data";

function App() {
  const [data, setData] = useState([]);
  return (
    <div>
      <InputGroup data={data} setData={setData} />
      <List setData={setData} data={data} />
    </div>
  );
}

export default App;
