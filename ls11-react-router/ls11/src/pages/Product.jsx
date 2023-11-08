import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

const data = [
  {
    id: 1,
    name: "Pants",
  },
  {
    id: 2,
    name: "Shirt",
  },
  {
    id: 3,
    name: "Cap",
  },
];
const Product = () => {
  const [searchParams,setSearchParams] = useSearchParams();
  // console.log(searchParams.get('name'))
  return (
    <div>
      {data.filter(v=>v.name.includes(searchParams.get('name') || '')).map((v) => (
        <div key={v.id}>
          <h5>{v.name}</h5>
          <Link to={`/product/${v.id}`}>Xem</Link>
        </div>
      ))}
      <Outlet />
    </div>
  );
};

export default Product;
