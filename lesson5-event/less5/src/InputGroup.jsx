import React, { useState } from "react";
const InputGroup = ({ setData, data }) => {
  const [inputValue, setInputValue] = useState("");
  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };
  const addBtClickHandler = () => {
    if (inputValue === "") return;
    setData((prev) => [
        ...prev,
        {
            name: inputValue,
        },
    ]);
    setInputValue("");
  };
  return (
    <div>
      <input value={inputValue} onChange={inputChangeHandler} />
      <button onClick={addBtClickHandler}>Add</button>
    </div>
  );
};

export default InputGroup;
