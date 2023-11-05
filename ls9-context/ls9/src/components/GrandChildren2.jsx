import React, { useContext } from "react";
import CountContext from "../Contexts/CountContext";
import CountContextNew from "../Contexts/CountContextNew";

const GrandChildren2 = () => {
  const [count, setCount] = useContext(CountContextNew);
  return <>{count}</>;
};

export default GrandChildren2;
