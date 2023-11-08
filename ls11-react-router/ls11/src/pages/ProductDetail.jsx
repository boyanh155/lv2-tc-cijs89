import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <span>ID:{params.productID}</span>
    </div>
  );
};

export default ProductDetail;
