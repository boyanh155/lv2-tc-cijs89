import React, { useContext } from "react";
import InputContext from "./Context/InputContext";
import TodoListContext from "./Context/TodoListContext";

const InputTodo = () => {
  const [inputValue, setInputValue] = useContext(InputContext);
  const {setTodos,todos} = useContext(TodoListContext);
  const addBtClickHander = () => {
    setTodos(prev=>[...prev,inputValue])
    setInputValue('')
  };
  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addBtClickHander}>Add</button>
    </div>
  );
};

export default InputTodo;
