import React from 'react';
import useCartContext from '../hooks/useCartContext';

const Cart = () => {
    const {createCart} = useCartContext()
    createCart()

    return (
        <div>
            asajsajs
        </div>
    );
};

export default Cart;