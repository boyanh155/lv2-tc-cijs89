import { createContext, useContext, useState } from "react";
import TodoListContext from "./TodoListContext";

const InputContext = createContext("");

export const InputContextProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");

  return <InputContext.Provider value={[inputValue,setInputValue]}>{children}</InputContext.Provider>;
};

export default InputContext;
