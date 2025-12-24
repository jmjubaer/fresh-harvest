/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Divider } from "antd";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import SocialLogin from "./SocialLogin";
import { useDispatch } from "react-redux";
import { openLogin } from "@/redux/features/auth/authModalSlice";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

type TRegistrationInput = {
    fullName: string;
    email: string;
    password: string;
};
// There has an issue the register and login response are not same. After login don`t give any access token.
const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [signup] = useRegisterMutation();
    const dispatch = useDispatch();

    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TRegistrationInput>();
    const onSubmit: SubmitHandler<TRegistrationInput> = async (data) => {
        try {
            const res = await signup(data).unwrap();
            if (res?.success) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Register Successful, Login Now.",
                    showConfirmButton: false,
                    timer: 2000,
                });
                reset();
                // Todo: Fix backend issue.
                dispatch(openLogin());
            }
        } catch (error: any) {
            toast.error(error?.data?.message);
        }
    };
    return (
        <div className=' -tracking-[2%]'>
            <h2 className='text-center text-[32px] font-semibold -tracking-[2px] font-primary mt-4'>
                Register
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className='-tracking-[2%]'>
                {/* Name input */}
                <div className='mt-6 leading-6 -tracking-[2%] font-secondary'>
                    <label
                        htmlFor='fullName'
                        className='font-secondary text-lg block mb-2'>
                        Full Name
                    </label>
                    <input
                        className='p-4 text-lg w-full border rounded-lg border-[#D9D9D9] placeholder:text-shadow outline-0'
                        placeholder='Enter your Name'
                        {...register("fullName", { required: true })}
                    />
                    {errors.fullName && (
                        <span className='text-sm text-red-500'>
                            Name is required
                        </span>
                    )}
                </div>
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

                <input
                    value={"Register"}
                    type='submit'
                    className='text-white bg-primary px-8 py-4 rounded-lg mt-6 w-full cursor-pointer text-lg font-semibold'
                />
            </form>
            <Divider>Or Sign Up with</Divider>
            {/* Social Login */}
            <SocialLogin />

            <p className='py-3 text-center font-semibold text-sm mt-6'>
                Already have an account?
                <button
                    onClick={() => dispatch(openLogin())}
                    className='text-primary cursor-pointer ml-1'>
                    Log In
                </button>
            </p>
        </div>
    );
};

export default RegisterForm;
