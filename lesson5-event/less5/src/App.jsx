import React, { useContext, useEffect, useState } from "react";
import InputGroup from "./InputGroup";
import List from "./List";
import { ApiStateContext } from "./contexts/ApiStateProvider";

function App() {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useContext(ApiStateContext)
  //
  const getTodoList = async () => {
    setLoading(true)
    const result = await fetch(
      "https://654f7637358230d8f0cd577c.mockapi.io/todo",
      {
        method: "GET",
      }
    );
    const jsonRes = await result.json();
    setData(jsonRes);
    setLoading(false)
  };

  useEffect(() => {
    getTodoList();
  }, []);
  return (
    <div>
      {loading && <h2>Loading...</h2>}
      <InputGroup data={data} setData={setData} getTodo={getTodoList}/>
      <List setData={setData} data={data} getTodo={getTodoList}/>
    </div>
  );
}

export default App;
