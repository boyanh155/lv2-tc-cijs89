import { createContext, useState } from "react";

const CountContextNew = createContext(0)

export const CountContextNewProvider = (props) => {
  const [count,setCount] = useState(0)
  return (
   <CountContextNew.Provider value={[count,setCount]}>
    {props.children}
   </CountContextNew.Provider>
  )
}

export default CountContextNew