"use client";

import { Checkbox, Divider } from "antd";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import SocialLogin from "./SocialLogin";
import { openSignup } from "@/redux/features/auth/authModalSlice";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { jwtDecode } from "jwt-decode";

type TLoginInput = {
    email: string;
    password: string;
};
const LoginForm = () => {
    const [login] = useLoginMutation();
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TLoginInput>();
    const onSubmit: SubmitHandler<TLoginInput> = async (data) => {
        const res = await login(data);
        console.log(res);
        if (res?.data?.success) {
            alert("Login successful");
            dispatch(
                setUser({
                    user: jwtDecode(res?.data?.data?.token),
                    token: res?.data?.data?.token,
                })
            );
        }
    };

    return (
        <div className='-tracking-[2%]'>
            <h2 className='text-center text-[32px] font-semibold -tracking-[2px] font-primary mt-4'>
                Login
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className='-tracking-[2%]'>
                {/* email input */}
                <div className='mt-6 leading-6 -tracking-[2%] font-secondary'>
                    <label
                        htmlFor='email'
                        className='font-secondary text-lg block mb-2'>
                        Email
                    </label>
                    <input
                        className='p-4 text-lg w-full border rounded-lg border-[#D9D9D9] placeholder:text-shadow outline-0'
                        placeholder='Enter your email'
                        {...register("email", { required: true })}
                    />
                    {errors.email && (
                        <span className='text-sm text-red-500'>
                            Email is required
                        </span>
                    )}
                </div>
                {/* password input*/}
                <div className='mt-5 leading-6 -tracking-[2%] font-secondary '>
                    <label htmlFor='password' className=' text-lg block mb-2'>
                        Password
                    </label>
                    <div className='relative h-fit'>
                        <input
                            type={showPassword ? "text" : "password"}
                            className='p-4 text-lg w-full border rounded-lg border-shadow placeholder:text-shadow outline-0'
                            placeholder='Enter your password'
                            {...register("password", { required: true })}
                        />
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className='absolute bottom-1/2 translate-y-1/2 right-4 text-2xl cursor-pointer'>
                            {showPassword ? (
                                <AiOutlineEye />
                            ) : (
                                <AiOutlineEyeInvisible />
                            )}
                        </span>
                    </div>
                    {errors.password && (
                        <span className='text-sm text-red-500'>
                            Password is required
                        </span>
                    )}
                </div>

                {/* additional part */}
                <div className='flex items-center justify-between mt-6'>
                    <Checkbox
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className='remember-checkbox text-xs font-medium font-primary'>
                        Remember me
                    </Checkbox>
                    <button className='text-sm font-semibold underline hover:text-blue-500 cursor-pointer text-[#4A4A52]'>
                        Forgot Password
                    </button>
                </div>

                <input
                    value={"Login"}
                    type='submit'
                    className='text-white bg-primary px-8 py-4 rounded-lg mt-6 w-full cursor-pointer text-lg font-semibold'
                />
            </form>
            <Divider>Or Sign in with</Divider>
            {/* Social Login */}
            <SocialLogin />

            <p className='py-3 text-center font-semibold text-sm mt-6'>
                Don`t have an account?{" "}
                <button
                    onClick={() => dispatch(openSignup())}
                    className='text-primary cursor-pointer ml-1'>
                    Sign up
                </button>
            </p>
        </div>
    );
};

export default LoginForm;
