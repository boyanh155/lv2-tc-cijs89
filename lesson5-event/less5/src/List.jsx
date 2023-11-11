import React, { useContext, useState } from "react";
import { ApiStateContext } from "./contexts/ApiStateProvider";

const List = ({ data, setData, getTodo }) => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useContext(ApiStateContext);

  const deleteTodo = async (id) => {
    setLoading(true)
    const result = await fetch(
      `https://654f7637358230d8f0cd577c.mockapi.io/todo/${id}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    setLoading(false)
    return result.status;
  };
  const deleteBtClickHandler = async (id) => {
    const status = await deleteTodo(id);
    if (status === 200) {
      getTodo();
    }
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
    <div
      style={{
        width: "1200px",
        margin: "0 auto",
      }}
    >
      <input
        value={inputValue}
        placeholder="Nhap tim kiem"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <ul
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {data.map((_value, index) => {
          return (
            <li
              key={index}
              style={{
                border: "1px solid #cccccc",
                flexBasis: "200px",
                padding: "1.6rem",
                textDecoration: "none",
                listStyle: "none",
              }}
            >
              <div
                style={{
                  textDecoration: !_value.active ? "line-through" : "",
                }}
              >
                {_value.name}
              </div>
              <div>user:{_value.username}</div>
              <button onClick={() => deleteBtClickHandler(_value.id)}>X</button>
              <button onClick={() => unActiveBtClickHandler(index)}>
                Un active
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
