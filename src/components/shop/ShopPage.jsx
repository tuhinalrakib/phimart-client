import React, { useEffect, useState } from 'react';
import useLoadingError from '../../hooks/useLoadingError';
import useAxios from '../../hooks/useAxios';
import ProductList from './ProductList';
import Pagination from './Pagination';
import FilterSection from './FilterSection';

const ShopPage = () => {
    const [products, setProducts] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [selectedCategory, setSelecetedCategory] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOrder, setSortOrder] = useState("");

    const { loading, error, setLoading, setError } = useLoadingError()
    const axiosInstance = useAxios()

    const handlePriceChange = (index, value) => {
        setPriceRange((prev) => {
            const newRange = [...prev];
            newRange[index] = value;
            return newRange;
        });
        setCurrentPage(1);
    };

    useEffect(() => {
        const fetch = async () => {
            try {
                setLoading(true)
                const res = await axiosInstance.get(`/products/?page=${currentPage}`)
                setProducts(res?.data?.results)
                setTotalPages(Math.ceil(res.data.count / 10))
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetch()
    }, [axiosInstance, setError, setLoading, currentPage])

    return (
        <div className='max-w-7xl mx-auto py-16 bg-gray-50'>
            <div className='flex justify-center items-center '>
                <h1 className='text-3xl md:text-4xl font-bold'>All Products</h1>
            </div>
            {/* Spinner */}
            {
                loading && <div className='flex justify-center items-center my-5'><span className="loading loading-bars loading-xl"></span></div>
            }
            {/* Errors Message */}
            {
                error && <ErrorAlert message={error} />
            }
            <FilterSection
                categories={selectedCategory}
                handlePriceChange={handlePriceChange}
                handleCategoryChange={}
            />
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