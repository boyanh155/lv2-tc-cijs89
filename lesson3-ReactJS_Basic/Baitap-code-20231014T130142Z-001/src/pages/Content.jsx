import React from "react";
import ItemList from "../components/Content/ItemList";

const Content = () => {
  const shareVar = "3";
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 4",
    "Item 4",
    "Item 4",
    "Item 4",
    "Item 4",
    "Item 4",
    "Item 4",
    "Item 4",
  ];
  return (
    <section className="content">
      <h2>Content Section</h2>
      <div className="description">
        <p>
          This is the content of the app. It can include various elements and
          components.
        </p>
        <button>Click Me</button>
      </div>
      {/* props */}
      {/* Truyen props */}
      <ItemList 
      shareVar={shareVar} 
      item1={"item1"} 
      item2={"item2"}
      />
    </section>
  );
};

export default Content;
