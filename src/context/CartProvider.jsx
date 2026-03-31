import React from 'react';
import { CartContext } from './CartContext';
import useCart from '../hooks/useCart';

const CartProvider = ({children}) => {
    const cartData = useCart()

    return <CartContext value={cartData}>
        {children}
    </CartContext>
};

export default CartProvider;