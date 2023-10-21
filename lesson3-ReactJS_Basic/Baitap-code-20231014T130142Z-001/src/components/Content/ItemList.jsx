import React from "react";

const ItemList = (props) => {
  const { item1 } = props;
  // Nhan props
  // destructuring
  console.log(item1);



  return (
    <ul className="item-list">
      {/* {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))} */}
    </ul>
  );
};

export default ItemList;
