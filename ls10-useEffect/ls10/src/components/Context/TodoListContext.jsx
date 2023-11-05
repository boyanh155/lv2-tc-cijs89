import React, { createContext, useState } from "react";

const TodoListContext = createContext([]);

export const TodoListContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    {
        name:'Item 2',
        active:true,
    }
  ]);
  return <TodoListContext.Provider value={{todos,setTodos}}>{children}</TodoListContext.Provider>;
};

export default TodoListContext;
