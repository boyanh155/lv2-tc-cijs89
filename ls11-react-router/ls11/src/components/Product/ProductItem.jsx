import { AddShoppingCart, FavoriteBorder } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ProductItem = ({ item }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <Card sx={{ width: 300 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={item.src}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <FavoriteBorder />
        </Button>
        <Button
          size="small"
          onClick={() => {
            addToCart(item.id, 1);
          }}
        >
          <AddShoppingCart />
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductItem;
