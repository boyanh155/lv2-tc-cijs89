import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const InputSearchProduct = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <input
        placeholder="Nhap ten san pham"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          navigate(`?name=${inputValue}`);
        }}
      >
        Tim
      </button>
    </>
  );
};

export default InputSearchProduct;
