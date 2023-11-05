import React, { useState } from "react";

const List = ({ data, setData }) => {
  
  const [inputValue, setInputValue] = useState("");

  const deleteBtClickHandler = (index) => {
    const newData = [...data];
    const newNewData = newData.filter((v, _index) => {
      if (index === _index) {
        return false;
      } else {
        return true;
      }
    });
    setData(newNewData);
  };
  const unActiveBtClickHandler = (index) => {
    const newData = [...data];
    const newNewData = newData.map((v, _index) => {
      if (index === _index) {
        //
        console.log(v.active);
        v.active = !v.active;
        return v;
      } else {
        return v;
        //
      }
    });
    setData([...newNewData]);
  };
  return (
    <>
      <input
        value={inputValue}
        placeholder="Nhap tim kiem"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <ul>
        {data.map((_value, index) => {
          return (
            <li key={index}>
              <span
                style={{
                  textDecoration: !_value.active ? "line-through" : "",
                }}
              >
                {_value.name}
              </span>
              <button onClick={() => deleteBtClickHandler(index)}>X</button>
              <button onClick={() => unActiveBtClickHandler(index)}>
                Un active
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default List;
