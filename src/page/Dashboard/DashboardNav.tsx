"use client";
import { Dropdown, MenuProps } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { FaRegUserCircle } from "react-icons/fa";
import Logo from "../shered/ui/Logo";

const DashboardNav = () => {
    const pathname = usePathname();
    const router = useRouter();

    const UserItems: MenuProps["items"] = [
        {
            label: (
                <div
                    className='text-xl'
                    // onClick={() => handleLogout()}
                >
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
        <div className='w-full fixed z-0 p-3 flex bg-black justify-between pr-5 '>
            <Logo />
            <div className='flex items-center gap-5 '>
                <div className='text-gray-400 '>
                    {/* <h3 className='capitalize font-bold'>{user?.role}</h3>
                    <h3 className='font-semibold z-0'>{user?.email}</h3> */}
                </div>
                <Dropdown trigger={["click"]} menu={userMenuProps}>
                    <button className='cursor-pointer'>
                        <FaRegUserCircle className='text-5xl text-white' />
                    </button>
                </Dropdown>
            </div>
        </div>
    );
};

export default DashboardNav;
