import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Parents from "./components/Parents";
import { TodoListContextProvider } from "./components/Context/TodoListContext";
import { InputContextProvider } from "./components/Context/InputContext";
import InputTodo from "./components/InputTodo";

function App() {

  return (
    <TodoListContextProvider>
      <InputContextProvider>
        <Parents />
        <InputTodo/>
      </InputContextProvider>
    </TodoListContextProvider>
  );
}

export default App;
