import React, { useContext, useState } from "react";
import { ApiStateContext } from "./contexts/ApiStateProvider";
const InputGroup = ({ getTodo }) => {
  const [inputValue, setInputValue] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading,setLoading] = useContext(ApiStateContext)

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
    // filter o day
  };
  const createTodo = async (todo) => {
    setLoading(true)
    const result = await fetch(
      "https://654f7637358230d8f0cd577c.mockapi.io/todo",
      {
        method: "POST",
        body: todo,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }
    );
    setLoading(false)
    return result.status;
  };
  const addBtClickHandler = async () => {
    if (inputValue === "") return;
    const newTodo = {
      name: inputValue,
      active: true,
      username: "loc",
    };
    // const status = await createTodo(JSON.stringify(newTodo));
    createTodo(JSON.stringify(newTodo)).then(status=>{
      if (status === 201) {
        setIsSuccess(true);       
          getTodo()
      } else {
        setIsSuccess(false);
      }
    })
    

    setInputValue("");
  };

  return (
    <div>
      {isSuccess ? (
        <div
          style={{
            color: "green",
          }}
        >
          Thanh cong
        </div>
      ) : (
        <div>Xin chao</div>
      )}
      <input value={inputValue} onChange={inputChangeHandler} />
      <button onClick={addBtClickHandler}>Add</button>
    </div>
  );
};

export default InputGroup;
