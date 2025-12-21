"use client";
import Link from "next/link";
import Logo from "./ui/Logo";
import { FaBars, FaCartShopping, FaHeart } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NavLink from "@/utils/Navlink";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const path = usePathname();
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div
            className={`fixed top-0 left-0 z-20 w-full transition-all  duration-500 ${
                scrolled ? "bg-primary/80 text-white backdrop-blur" : "bg-transparent"
            }`}>
            <div
                className={`container duration-500 flex items-center justify-between  z-20 ${
                    scrolled ? "py-3" : "py-7"
                }`}>
                <Logo />
                <nav className='lg:flex items-center gap-10 font-secondary text-sm hidden'>
                    <NavLink href={"/"}>Home</NavLink>
                    <NavLink href={"/"}>Shop</NavLink>
                    <NavLink href={"/"}>About us</NavLink>
                    <NavLink href={"/"}>Blog</NavLink>
                </nav>{" "}
                <nav
                    className={`lg:flex items-center gap-4 font-secondary text-sm hidden z-20 ${
                        path === "/" || scrolled
                            ? " text-white"
                            : "text-secondary"
                    }`}>
                    <Link href={"/"} className='flex items-center gap-3'>
                        <FaHeart /> Favorites
                    </Link>
                    <Link href='/' className=' mt-2 flex items-center gap-3'>
                        <span className='relative'>
                            <FaCartShopping className='' />
                            <span className='absolute -top-3 -right-3 bg-red-400 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center'>
                                {0}
                            </span>
                        </span>
                        Cart
                    </Link>
                    <button
                        className={`border py-3 px-6 font-semibold rounded ${
                            path === "/" || scrolled
                                ? " text-white"
                                : "text-primary-text"
                        }`}>
                        Sign in
                    </button>
                </nav>
                {/* Mobile Menu */}
                <div
                    className={`flex items-center gap-5 z-20 lg:hidden ${
                        path === "/" || scrolled
                            ? " text-white"
                            : "text-secondary"
                    }`}>
                    <Link href='/' className=' flex items-center gap-3'>
                        <span className='relative'>
                            <FaCartShopping className='' />
                            <span className='absolute -top-3 -right-3 bg-red-400 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center'>
                                {0}
                            </span>
                        </span>
                        Cart
                    </Link>
                    <button
                        onClick={() => setOpen(true)}
                        className='text-xl  z-20 '>
                        <FaBars />
                    </button>
                </div>
                <div
                    className={`fixed h-screen bg-primary-text/90 text-xl text-center text-secondary top-0 overflow-hidden duration-500 transition-all left-0 z-50 flex flex-col gap-5 justify-center ${
                        open ? "w-full" : "w-0"
                    }`}>
                    <button
                        onClick={() => setOpen(false)}
                        className='absolute top-5 right-5 text-red-500'>
                        <FaTimes />
                    </button>
                    <NavLink href={"/"}>Home</NavLink>
                    <NavLink href={"/"}>Shop</NavLink>
                    <NavLink href={"/"}>About us</NavLink>
                    <NavLink href={"/"}>Blog</NavLink>
                    <Link
                        href={"/"}
                        className='flex items-center mx-auto gap-3'>
                        <FaHeart /> Favorites
                    </Link>
                    <button
                        className={`border w-fit mx-auto py-3 px-14 font-semibold rounded ${
                            path === "/" || scrolled
                                ? " text-white"
                                : "text-primary-text"
                        }`}>
                        Sign in
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
