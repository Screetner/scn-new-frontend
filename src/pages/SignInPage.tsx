import React, {useEffect, useState} from 'react';
import logo from '/logo.jpg';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import {useAuth} from "../context/AuthContext.tsx";
import {useNavigate} from "react-router-dom";
import {useSignIn} from "../hooks/auth/useSignIn.tsx";

const SignInPage: React.FC = () => {
    const {User} = useAuth()
    const navigate = useNavigate()
    const {handleSubmit,handleChange,formData} = useSignIn()

    useEffect(() => {
        if(User?.isActiveUser){
            navigate("/")
        }
    }, []);

    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md">
                <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
                    <div className="flex justify-center mb-6">
                        <img src={logo} alt="Logo" className="h-12" />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 font-bold mb-2"
                                htmlFor="username"
                            >
                                Username
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="username"
                            />
                        </div>
                        <div className="mb-6 relative">
                            <label
                                className="block text-gray-700 font-bold mb-2"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="password"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                <button
                                    type="button"
                                    onClick={toggleShowPassword}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            <div className="flex justify-end mt-2">
                                <a
                                    href="#"
                                    className="inline-flex items-center font-bold text-sm text-blue-500 hover:text-blue-800"
                                >
                                    <FaEye className="mr-1" />
                                    Forgot Password?
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center justify-end">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;