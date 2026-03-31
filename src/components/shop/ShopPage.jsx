import React, { useState } from 'react';
import ProductList from './ProductList';
import Pagination from './Pagination';
import FilterSection from './FilterSection';
import useFetchProducts from '../../hooks/useFetchProducts';
import useFetchQuery from '../../hooks/useFetchQuery';
import Loader from '../UI/Loader';

const ShopPage = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [selectedCategory, setSelecetedCategory] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOrder, setSortOrder] = useState("");

    const {data : category, isLoading : categoryLoading} = useFetchQuery("category", '/category/')

    const { isLoading, products, totalPages } = useFetchProducts({ currentPage, priceRange, selectedCategory, searchQuery, sortOrder })

    const handlePriceChange = (index, value) => {
        setPriceRange((prev) => {
            const newRange = [...prev];
            newRange[index] = value;
            return newRange;
        });
        setCurrentPage(1);
    };

    if(isLoading || categoryLoading) return <Loader />

    return (
        <div className='max-w-7xl mx-auto py-16'>
            <div className='flex justify-center items-center '>
                <h1 className='text-3xl md:text-4xl font-bold'>All Products</h1>
            </div>
            <FilterSection
                categories={category}
                handlePriceChange={handlePriceChange}
                handleCategoryChange={setSelecetedCategory}
                selectedCategory={selectedCategory}
                priceRange={priceRange}
                handleSearchQuery={setSearchQuery}
                handleSorting={setSortOrder}
                searchQuery={searchQuery}
                sortOrder={sortOrder}
            />
          
            {/* Errors Message */}

            <ProductList products={products} />
            <div className='mb-5'></div>
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                handlePageChange={setCurrentPage}
            />
        </div>
    );
};

export default ShopPage;