import React, { useEffect, useState } from 'react';
import useAxios from './useAxios';
import useAxiosSecure from './useAxiosSecure';

const useAuth = () => {
    const [user, setUser] = useState(null)
        const [errorMsg, setErrorMsg] = useState("")
        const [loading, setLoading] = useState(true)
    
        const axiosInstance = useAxios()
        const axiosSecure = useAxiosSecure()
    
        const handleAPIError = (
            error,
            defaultMessage = "Something Went Wrong! Try Again"
        ) => {
    
            if (error.response && error.response.data) {
                const errorMessage = Object.values(error.response.data).flat().join("\n");
                setErrorMsg(errorMessage);
                return { success: false, message: errorMessage };
            }
            setErrorMsg(defaultMessage);
            return {
                success: false,
                message: defaultMessage,
            };
        };
    
        // ✅ Get token from localStorage
        const getToken = () => {
            try {
                const token = localStorage.getItem("authToken")
                return token ? JSON.parse(token) : null
            } catch {
                return null
            }
        }
    
        const [authToken, setAuthToken] = useState(getToken())
    
        // ✅ Save token helper
        const saveToken = (token) => {
            setAuthToken(token)
            localStorage.setItem("authToken", JSON.stringify(token))
        }
    
        // ✅ Logout
        const logoutUser = () => {
            setUser(null)
            setAuthToken(null)
            localStorage.removeItem("authToken")
        }
    
        // ✅ Fetch User Profile
        const fetchUserProfile = async (token = authToken) => {
            if (!token?.access) return
    
            try {
                const res = await axiosSecure.get("/auth/users/me/")
                setUser(res.data)
            } catch (err) {
                console.log("Fetch user failed:", err)
                logoutUser() // 🔥 invalid token হলে logout
            }
        }
    
        // ✅ Login User (clean + reliable)
        const loginUser = async (data) => {
            setErrorMsg("")
            setLoading(true)
    
            try {
                const res = await axiosInstance.post("/auth/jwt/create/", data)
    
                const token = res.data
                saveToken(token)
    
                // 🔥 fetch user immediately
                const userRes = await axiosSecure.get("/auth/users/me/")
    
                setUser(userRes.data)
    
                return userRes.data
            } catch (err) {
                setErrorMsg(err.response?.data?.detail || "Login failed")
                throw err
            } finally {
                setLoading(false)
            }
        }
    
        const registerUser = async (data) => {
            setErrorMsg("")
            try {
                await axiosInstance.post('/auth/users/', data)
                return {
                    success: true,
                    message:
                        "Registration successfull. Check your email to activate your account.",
                };
            } catch (err) {
                return handleAPIError(err, "Registration Failed! Try Again");
            }
        }
    
        // Update User Profile
        const updateUserProfile = async (data) => {
            setErrorMsg("");
            try {
                await axiosSecure.put("/auth/users/me/", data);
            } catch (error) {
                return handleAPIError(error);
            }
        };
    
        // Password Change
        const changePassword = async (data) => {
            setErrorMsg("");
            try {
                await axiosInstance.post("/auth/users/set_password/", data, {
                    headers: {
                        Authorization: `JWT ${authToken?.access}`,
                    },
                });
            } catch (error) {
                return handleAPIError(error);
            }
        };
    
        // ✅ Auto login on reload
        useEffect(() => {
            const initAuth = async () => {
                if (authToken?.access) {
                    await fetchUserProfile(authToken)
                }
                setLoading(false)
            }
    
            initAuth()
        }, [authToken])
    
        return {
            user,
            loginUser,
            logoutUser,
            fetchUserProfile,
            errorMsg,
            loading,
            registerUser,
            updateUserProfile,
            changePassword,
            getToken
        }
};

export default useAuth;