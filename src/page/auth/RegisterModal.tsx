"use client";

import { Checkbox, Divider, Modal } from "antd";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import SocialLogin from "./SocialLogin";
type TLoginInput = {
    fullName: string;
    email: string;
    password: string;
};
const RegisterModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<TLoginInput>();
    const onSubmit: SubmitHandler<TLoginInput> = (data) => console.log(data);

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            {/* ${
                    path === "/" || scrolled
                        ? " text-white"
                        : "text-primary-text"
                } */}
            <button
                onClick={() => setIsModalOpen(!isModalOpen)}
                className={`border cursor-pointer py-3 px-6 font-semibold rounded text-white`}>
                Register
            </button>
            <Modal
                className='auth-modal !w-1/2 -tracking-[2%]'
                // closable={{ "aria-label": "Custom Close Button" }}
                open={isModalOpen}
                footer={null}
                onCancel={handleCancel}>
                <h2 className='text-center text-[32px] font-semibold -tracking-[2px] font-primary mt-4'>
                    Register
                </h2>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='-tracking-[2%]'>
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
                        <label
                            htmlFor='password'
                            className=' text-lg block mb-2'>
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
                    <button className='text-primary'>Log In</button>
                </p>
            </Modal>
        </>
    );
};

export default RegisterModal;
