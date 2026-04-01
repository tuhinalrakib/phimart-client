import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import ErrorAlert from '../../components/ErrorAlert';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { FaRegEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import Loader from '../../components/UI/Loader';
import useAuthContext from '../../hooks/useAuthContext';

const Login = () => {
    const { loginUser, errorMsg, loading, user } = useAuthContext()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false)

    useEffect(()=>{
        if(user) navigate("/dashboard")
    },[user])

    const onSubmit = async (data) => {
        const res = await loginUser(data)
        
        if (res.success) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Login Successful",
                showConfirmButton: false,
                timer: 1500
            })
            navigate("/dashboard")

        }
    }

    if(loading) return <Loader />

    return (
        <div className="flex min-h-screen items-center justify-center px-4 py-12 bg-base-200">
            <div className="card w-full max-w-md bg-base-100 shadow-xl">
                <div className="card-body">
                    {errorMsg && <ErrorAlert message={errorMsg} />}
                    <h2 className="card-title text-2xl font-bold">Sign in</h2>
                    <p className="text-base-content/70">
                        Enter your email and password to access your account
                    </p>

                    <form className="space-y-4 mt-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label" htmlFor="email">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="name@example.com"
                                className={`input input-bordered w-full ${errors.email ? "input-error" : ""
                                    }`}
                                {...register("email", { required: "Email is required" })}
                            />
                            {errors.email && (
                                <span className="label-text-alt text-error">
                                    {errors.email.message}
                                </span>
                            )}
                        </div>

                        <div className="form-control">
                            <label className="label" htmlFor="password">
                                <span className="label-text">Password</span>
                            </label>
                            <div className='relative'>
                                <input
                                    id="password"
                                    type={showPassword ? "password" : "text"}
                                    placeholder="••••••••"
                                    className={`input input-bordered w-full ${errors.email ? "input-error" : ""
                                        }`}
                                    {...register("password", { required: "Password is required" })}
                                />
                                <button
                                    onClick={() => setShowPassword(!showPassword)}
                                    type='button'
                                    className='absolute top-1.5 cursor-pointer right-1'
                                >
                                    {
                                        showPassword
                                            ?
                                            <FaRegEyeSlash size={25} />
                                            :
                                            <MdOutlineRemoveRedEye size={25} />
                                    }

                                </button>
                            </div>
                            {errors.password && (
                                <span className="label-text-alt text-error">
                                    {errors.password.message}
                                </span>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary w-full"
                            disabled={loading || user}
                        >
                            {loading ? "Logging In..." : "Login"}
                            {/* Logging */}
                        </button>
                    </form>

                    <div className="text-center mt-4">
                        <p className="text-base-content/70">
                            Don&apos;t have an account?{" "}
                            <Link to="/register" className="link link-primary">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;