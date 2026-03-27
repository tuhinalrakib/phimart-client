import React, { useEffect, useState } from 'react';
import useLoadingError from './useLoadingError';
import useAxios from './useAxios';

const useFetchCategories = () => {
    const [category, setCategory] = useState([])
    const { setError, setLoading} = useLoadingError()
    const axiosInstance = useAxios()

    useEffect(() => {
        const fetch = async () => {
            try {
                setLoading(true)
                const res = await axiosInstance.get('/category/')
                setCategory(res.data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetch()
    }, [axiosInstance, setError, setLoading])

    return category
};

export default useFetchCategories;