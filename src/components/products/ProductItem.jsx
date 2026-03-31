import React from 'react';
import DafaultImage from "../../assets/images/default_product.jpg"
import { Link } from 'react-router';

const ProductItem = ({ product }) => {
    return (
        <Link to={`/shop/${product.id}`}>
            <div className="card bg-base-100 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={product.images[0]?.image || DafaultImage}
                        alt="Shoes"
                        loading='lazy'
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{product?.name}</h2>
                    <h5 className='text-xl font-bold text-red-700'>{product?.price} $</h5>
                    <p>{product?.description}</p>
                    <div className="card-actions">
                        <button className="btn btn-secondary">Buy Now</button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductItem;