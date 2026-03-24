import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        const fetch = async()=>{
            const res = await axios.get('https://phimart-mu.vercel.app/api/products/')
            setProducts(res.data.results)
        }
        fetch()
    },[])
console.log(products)
    return (
        <div>
            
        </div>
    );
};

export default Products;