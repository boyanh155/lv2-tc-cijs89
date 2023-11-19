import { createContext, useReducer } from "react";
import reducer, { SET_CART, initialState } from "../reducer/CartReducer";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state)
  const { cartList } = state;
  const addToCart = (id, quantity = 1) => {
    const currentIndex = cartList.findIndex((v) => v.id === id);
    console.log(currentIndex)
    if (currentIndex>-1) {
      const newList = [...cartList];
      newList[currentIndex] = {
        ...newList[currentIndex],
        quantity: newList[currentIndex].quantity + quantity,
      };
      dispatch({
        type: SET_CART,
        payload: newList,
      });
    } else {
      const newList = [...cartList];
      newList.push({
        id,
        quantity,
      });
      console.log(newList)
      dispatch({
        type: SET_CART,
        payload: newList,
      });
    }
  };
//   const removeFromCart = (id, quantity) => {};
//   const getTotalCart = () => {};

  return (
    <CartContext.Provider value={{
        state,
        addToCart
    }}>
      {children}
    </CartContext.Provider>
  );
}
