import { ShoppingBag } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
    const {state} = useContext(CartContext)
  return (
    <Badge badgeContent={state.cartList.length} color='primary'>
        <ShoppingBag/>
    </Badge>
  )
}

export default Cart