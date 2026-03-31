import axios from 'axios';
import React from 'react';

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}`
})

const useAxiosSecure = () => {
    
    axiosInstance.interceptors.request.use(
        (config) => {
            const token = JSON.parse(localStorage.getItem("authToken"))
         
            if (token) {
                config.headers.Authorization = `JWT ${token?.access}`;
            }
            return config
        },
        (error) => Promise.reject(error)
    )

    return axiosInstance
};

export default useAxiosSecure;