import React, { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import useLoadingError from '../../hooks/useLoadingError';
import CategoryItems from './CategoryItems';

const Categories = () => {
    const [category, setCategory] = useState([])
    const { error, loading, setError, setLoading } = useLoadingError()
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

    return (
        <div className='max-w-7xl mx-auto py-16'>
            <div className='flex justify-between items-center '>
                <h1 className='text-3xl md:text-4xl font-bold'>Explore Categories</h1>
                <a href="" className='btn btn-secondary py-4 px-8 rounded-full shadow'>View All</a>
            </div>
            {/* Spinner */}
            {
                loading && <div className='flex justify-center items-center my-5'><span className="loading loading-bars loading-xl"></span></div>
            }
            {/* Errors Message */}
            {
                error && <ErrorAlert message={error} />
            }
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-10'>
                {
                    category?.map((category, index) => (
                        <CategoryItems key={category.id} index={index} category={category} />
                    ))
                }
            </div>
        </div>
    );
};

export default Categories;