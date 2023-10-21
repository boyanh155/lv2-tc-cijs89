import React from "react";

const List = ({ data, setData }) => {
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
  return (
    <ul>
      {data.map((value, index) => {
        return (
          <li key={index}>
            {value.name}
            <button onClick={() => deleteBtClickHandler(index)}>X</button>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
