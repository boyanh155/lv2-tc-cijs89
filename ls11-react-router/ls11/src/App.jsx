import "./App.css";
import { Button } from "@mui/material";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Favorites from "./pages/Favorites";
import ProductDetail from "./pages/ProductDetail";
import InputSearchProduct from "./components/InputSearchProduct";

function App() {
  return (
    <>
      {/* Dynamic */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />}>
          {/* ID */}
          <Route path="search" element={<InputSearchProduct />} />
          <Route path=":productID" element={<ProductDetail />} />
        </Route>
        <Route path="/favorites" element={<Favorites />} />
      </Routes>

      {/* Static */}
      <NavBar />
    </>
  );
}

export default App;
