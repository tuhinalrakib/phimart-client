import React from 'react';
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useFetchQuery = (key, url) => {
    const axiosInstance = useAxios()

    return useQuery({
        queryKey : [key],
        queryFn : async()=>{
            const res = await axiosInstance.get(url)
            return res.data
        }
    })
};

export default useFetchQuery;