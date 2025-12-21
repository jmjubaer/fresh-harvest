import Image from "next/image";
import Logo from "./ui/Logo";
import playstore from "@/assets/play.png";
import applestore from "@/assets/app.png";
import Link from "next/link";
import { MdOutlinePhone } from "react-icons/md";
import { SlEnvolope } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import payment_methods_1 from "@/assets/visa_card.png";
import payment_methods_2 from "@/assets/paypal.png";
import payment_methods_3 from "@/assets/pay.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer className='bg-[#F4F6F6] pt-16'>
            <div className='container'>
                <div className='grid lg:grid-cols-4 sm:grid-cols-2 justify-between'>
                    <div className='flex flex-col justify-between'>
                        <Logo />
                        <div className=''>
                            <p className='text-sm'>Download App:</p>
                            <div className='flex items-center'>
                                <button>
                                    <Image
                                        src={applestore}
                                        alt='apple store'
                                        className='w-36'
                                    />
                                </button>{" "}
                                <button>
                                    <Image
                                        src={playstore}
                                        alt='play store'
                                        className='w-36'
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='w-fit lg:mx-auto'>
                        <h3 className='text-lg font-medium'>Quick links 1</h3>
                        <ul className='text-sm'>
                            <li className='my-3 text-[#4A4A52]'>
                                <Link href='/'>Home</Link>
                            </li>
                            <li className='my-3 text-[#4A4A52]'>
                                <Link href='/'>Shop</Link>
                            </li>
                            <li className='my-3 text-[#4A4A52]'>
                                <Link href='/'>About us</Link>
                            </li>
                            <li className='my-3 text-[#4A4A52]'>
                                <Link href='/'>Blog</Link>
                            </li>
                            <li className='my-3 text-[#4A4A52]'>
                                <Link href='/'>Detail Blog</Link>
                            </li>
                        </ul>
                    </div>{" "}
                    <div className='w-fit lg:mx-auto'>
                        <h3 className='text-lg font-medium'>Quick links 2</h3>
                        <ul className='text-sm'>
                            <li className='my-3 text-[#4A4A52]'>
                                <Link href='/'>Favorites</Link>
                            </li>
                            <li className='my-3 text-[#4A4A52]'>
                                <Link href='/'>Cart</Link>
                            </li>
                            <li className='my-3 text-[#4A4A52]'>
                                <Link href='/'>Sign in</Link>
                            </li>
                            <li className='my-3 text-[#4A4A52]'>
                                <Link href='/'>Register</Link>
                            </li>
                        </ul>
                    </div>
                    <div className=''>
                        <h3 className='text-lg font-medium'>Contact us</h3>
                        <ul className='text-sm'>
                            <li className='my-3 text-[#4A4A52] flex items-center gap-2'>
                                <MdOutlinePhone className='text-secondary text-2xl' />{" "}
                                1234 5678 90
                            </li>
                            <li className='my-3 text-[#4A4A52] flex items-center gap-2'>
                                <SlEnvolope className='text-secondary text-2xl' />{" "}
                                Freshharvests@gmail.com
                            </li>
                            <li className='my-3 text-[#4A4A52] flex items-center gap-2'>
                                <div className=''>
                                    <CiLocationOn className='text-secondary text-2xl' />
                                </div>
                                Tanjung Sari Street, Pontianak, Indonesia
                            </li>
                        </ul>
                        <div className=''>
                            <h4 className='text-xs font-medium'>
                                Accepted Payment Methods:
                            </h4>
                            <div className='flex items-center gap-2.5 mt-3'>
                                <button>
                                    <Image
                                        src={payment_methods_1}
                                        alt='payment methods'
                                        // className='w-48 mt-2'
                                    />
                                </button>
                                <button>
                                    <Image
                                        src={payment_methods_2}
                                        alt='payment methods'
                                        // className='w-48 mt-2'
                                    />
                                </button>
                                <button>
                                    <Image
                                        src={payment_methods_3}
                                        alt='payment methods'
                                        // className='w-48 mt-2'
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-6 border-t border-[#D9D9D9] mt-8 flex items-center sm:justify-between justify-center flex-col-reverse gap-7 sm:flex-row flex-wrap sm:flex-nowrap'>
                    <p className=' text-xs text-[#4A4A52]'>
                        © 2023 Fresh Harvests. All rights reserved.
                    </p>
                    <ul className='flex items-center gap-3'>
                        <li className='w-8 h-8 bg-primary-text text-white flex items-center justify-center rounded-full'>
                            <FaTwitter />
                        </li>
                        <li className='w-8 h-8 bg-primary-text text-white flex items-center justify-center rounded-full'>
                            <FaFacebookF />
                        </li>
                        <li className='w-8 h-8 bg-primary-text text-white flex items-center justify-center rounded-full'>
                            <FaInstagram />
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
