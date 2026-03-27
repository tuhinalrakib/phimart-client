import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import useAxios from '../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';

const AuthProvider = ({ children }) => {
    const [user, Setuser] = useState(null)
    const [errorMsg, setErrorMsg] = useState("")
    const axiosInstance = useAxios()

    const getToken = () => {
        const token = localStorage.getItem("authToken")
        return token ? JSON.parse(token) : null
    }
    const [authToken, setAuthToken] = useState(getToken)

    useEffect(()=>{
        if(authToken){
            fetchUserProfile()
        }
    },[authToken])

    // Fetch User Profile
    const fetchUserProfile = async()=>{
        try{
            const res = await axiosInstance.get("/auth/users/me/",{
                headers : {Authorization : `JWT ${authToken?.access}`}
            })
            Setuser(res.data)
        }catch(err){
            console.log(err)
        }
    }

    // Login User
    const loginUser = async (authData) => {
        setErrorMsg("")
        try {
            const res = await axiosInstance.post("/auth/jwt/create/", authData)
            setAuthToken(res.data)
            localStorage.setItem("authToken", JSON.stringify(res.data))
        }catch(err){
            setErrorMsg(err.response?.data?.detail)
        }
    }

    const authData = {
        user,
        Setuser,
        loginUser,
        fetchUserProfile,
        errorMsg
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;