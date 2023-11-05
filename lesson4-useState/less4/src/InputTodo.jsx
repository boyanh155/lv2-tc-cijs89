import React, { useState } from "react";

const InputTodo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList,setTodoList] = useState([])
  const inputChangeHandler = (e) => {
    // console.log(e.target.value)
    setInputValue(e.target.value);
  };
  const buttonClickHandler = () => {
    //mutate
    const oldTodoList = [...todoList]
    oldTodoList.push(inputValue)
    //1. Xoa gia tri trung
    //2. inputValue rong khong cho 
    //
    setTodoList(oldTodoList)
    //clear input
    setInputValue("");
  };
  return (
    <div>
      {/* Input */}
      <input value={inputValue} onChange={inputChangeHandler} type="text" />
      <button onClick={buttonClickHandler}>Add</button>
      <span></span>
      {/* List */}
      {
        todoList.map((item,index)=>{
          return <div key={index}>
           {item}
            </div>
        })
      }
    </div>
  );
};

export default InputTodo;
