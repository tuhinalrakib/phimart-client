import React, { useEffect, useState } from 'react';
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useFetchProducts = ({
    currentPage,
    priceRange,
    selectedCategory,
    searchQuery,
    sortOrder

}) => {
    const [totalPages, setTotalPages] = useState(0)
    const axiosInstance = useAxios()

    const url = `/products/?price__gt=${priceRange[0]}&price__lt=${priceRange[1]}&page=${currentPage}&category_id=${selectedCategory}&search=${searchQuery}&ordering=${sortOrder}`

    const { data: products = [], isLoading } = useQuery({
        queryKey: [
            "products",
            currentPage,
            priceRange,
            selectedCategory,
            searchQuery,
            sortOrder
        ],
        queryFn: async () => {
            const res = await axiosInstance.get(url);
            setTotalPages(Math.ceil(res.data.count / 10));
            return res.data.results;
        }
    });

    return {
        products,
        isLoading,
        totalPages,
    }
};

export default useFetchProducts;