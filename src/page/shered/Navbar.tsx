"use client";
import Link from "next/link";
import Logo from "./ui/Logo";
import { FaBars, FaCartShopping, FaHeart } from "react-icons/fa6";
import { FaRegUserCircle, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NavLink from "@/utils/Navlink";
import { useDispatch } from "react-redux";
import { openLogin } from "@/redux/features/auth/authModalSlice";
import { RootState } from "@/redux/store";
import { useAppSelector } from "@/redux/hook";
import { Dropdown, MenuProps } from "antd";
import { logout } from "@/redux/features/auth/authSlice";
import Swal from "sweetalert2";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { user } = useAppSelector((state: RootState) => state.auth);
    const path = usePathname();
    const dispatch = useDispatch();
    console.log(user);
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
    const handleLogout = () => {
        Swal.fire({
            title: "Warning",
            text: "Are you Want to Log out!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#749b3f",
            cancelButtonColor: "#d33",
            confirmButtonText: "Log Out",
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(logout());
                dispatch(openLogin());
            }
        });
    };
    const UserItems: MenuProps["items"] = [
        {
            label: (
                <Link href={"/admin"} className='text-xl'>
                    Admin Panel
                </Link>
            ),
            key: "admin",
        },
        {
            label: (
                <div className='text-xl' onClick={() => handleLogout()}>
                    Log out
                </div>
            ),
            key: "logout",
        },
    ];
    const userMenuProps = {
        items: UserItems,
    };
    return (
        <div
            className={`fixed top-0 left-0 z-20 w-full transition-all  duration-500 ${
                scrolled
                    ? "bg-primary/80 text-white backdrop-blur"
                    : "bg-transparent"
            }`}>
            <div
                className={`container duration-500 flex items-center justify-between  z-20 ${
                    scrolled ? "py-3" : "py-7"
                }`}>
                <Logo />
                <nav className='lg:flex items-center gap-10 font-secondary text-sm hidden'>
                    <NavLink href={"/"}>Home</NavLink>
                    <NavLink href={"/shop"}>Shop</NavLink>
                    <NavLink href={"#about"}>About us</NavLink>
                    <NavLink href={"#blog"}>Blog</NavLink>
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
                    {user ? (
                        <Dropdown trigger={["click"]} menu={userMenuProps}>
                            <button className='cursor-pointer'>
                                <FaRegUserCircle className='text-5xl text-white' />
                            </button>
                        </Dropdown>
                    ) : (
                        <button
                            onClick={() => dispatch(openLogin())}
                            className={`border cursor-pointer py-3 px-6 font-semibold rounded ${
                                path === "/" || scrolled
                                    ? " text-white"
                                    : "text-primary-text"
                            }`}>
                            Sign in
                        </button>
                    )}
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
                    <NavLink href={"#about"}>About us</NavLink>
                    <NavLink href={"#blog"}>Blog</NavLink>
                    <Link
                        href={"/"}
                        className='flex items-center mx-auto gap-3'>
                        <FaHeart /> Favorites
                    </Link>
                    <button
                        onClick={() => dispatch(openLogin())}
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
