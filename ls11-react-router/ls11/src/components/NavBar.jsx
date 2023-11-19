import { Favorite, LocationCity, Restore } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [current, setCurrent] = useState("");
  const navigate = useNavigate();
  return (
  
    <BottomNavigation
      showLabels
      value={current}
      onChange={(event, newValue) => {
        setCurrent(newValue);
        navigate(newValue);
      }}
    >
      <BottomNavigationAction value="home" label="Home" icon={<Restore />} />

      <BottomNavigationAction
        value="favorites"
        label="Favorites"
        icon={<Favorite />}
      />
      <BottomNavigationAction
        value="product"
        label="Product"
        icon={<LocationCity />}
      />
    </BottomNavigation>
  );
};

export default NavBar;
