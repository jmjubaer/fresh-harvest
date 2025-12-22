"use client";

import { Checkbox, Divider, Modal } from "antd";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import google from "@/assets/Google.png";
import facebook from "@/assets/facebook.png";
import Image from "next/image";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
type TLoginInput = {
    email: string;
    password: string;
    rememberMe?: boolean;
};
const LoginModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
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
                Sign in
            </button>
            <Modal
                className='auth-modal !w-1/2 -tracking-[2%]'
                // closable={{ "aria-label": "Custom Close Button" }}
                open={isModalOpen}
                footer={null}
                onCancel={handleCancel}>
                <h2 className='text-center text-[32px] font-semibold -tracking-[2px] font-primary mt-4'>
                    Login
                </h2>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='-tracking-[2%]'>
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
                        type='submit'
                        className='text-white bg-primary px-8 py-4 rounded-lg mt-6 w-full cursor-pointer text-lg font-semibold'
                    />
                </form>
                <Divider>Or Sign in with</Divider>
                <div className='grid grid-cols-2 gap-4 mt-6'>
                    <button className='flex items-center gap-3 border border-shadow rounded-lg justify-center p-3 cursor-pointer text-lg font-semibold'>
                        {" "}
                        <Image
                            width={20}
                            height={20}
                            src={google}
                            alt='Google Icon'
                        />{" "}
                        Google
                    </button>
                    <button className='flex items-center gap-3 border border-shadow rounded-lg justify-center p-3 cursor-pointer text-lg font-semibold'>
                        {" "}
                        <Image
                            width={20}
                            height={20}
                            src={facebook}
                            alt='Facebook Icon'
                        />{" "}
                        Facebook
                    </button>
                </div>
                <p className='py-3 text-center font-semibold text-sm mt-6'>
                    Don’t have an account?{" "}
                    <button className='text-primary'>Sign up</button>
                </p>
            </Modal>
        </>
    );
};

export default LoginModal;
