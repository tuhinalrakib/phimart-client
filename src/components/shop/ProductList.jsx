import React from 'react';
import ProductItem from '../products/ProductItem';

const ProductList = ({products}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
            {
                products?.map(product => <ProductItem key={product.id} product={product} />)
            }
        </div>
    );
};

export default ProductList;