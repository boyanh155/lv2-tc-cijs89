import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import ProductItem from "../components/Product/ProductItem";
import { Stack } from "@mui/material";

const data = [
  {
    id: 1,
    name: "Pants",
    price:10,
    src: "https://aothunnhatban.vn/wp-content/uploads/2020/12/xuong-si-quan-ao-tre-em-vnxk-600x353.jpg",
  },
  {
    id: 2,
    name: "Shirt",
    price:5,
    src: "https://down-vn.img.susercontent.com/file/1aa10395043391473706a0991c58b875",
  },
  {
    id: 3,
    name: "Cap",
    price:20,
    src: "https://aothunnhatban.vn/wp-content/uploads/2020/12/xuong-si-quan-ao-tre-em-vnxk-600x353.jpg",
  },
];
const Product = () => {
  // const [searchParams,setSearchParams] = useSearchParams();
  // console.log(searchParams.get('name'))
  return (
    <Stack direction='row' justifyContent='space-evenly'>
      {data.map((v) => (
        <ProductItem key={v.id} item={v} />
      ))}
      <Outlet />
    </Stack>
  );
};

export default Product;
