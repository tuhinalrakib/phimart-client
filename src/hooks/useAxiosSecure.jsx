import axios from 'axios';
import React, { useEffect } from 'react';

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}`
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authTokens");
    if (token) {
      config.headers.Authorization = `JWT ${JSON.parse(token)?.access}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const useAxiosSecure = () => {

    return axiosInstance
};

export default useAxiosSecure;