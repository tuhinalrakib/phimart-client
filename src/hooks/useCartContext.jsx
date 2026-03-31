import React, { use } from 'react';
import { CartContext } from '../context/CartContext';

const useCartContext = () => {
    const cartInfo = use(CartContext)
    return cartInfo
};

export default useCartContext;