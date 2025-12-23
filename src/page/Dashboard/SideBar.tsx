"use client";
import { Layout, Menu } from "antd";
import Link from "next/link";
const { Sider } = Layout;
const SideBar = () => {
    const sidebarItems = [
        {
            key: "/admin",
            label: <Link href={`/admin`}>Dashboard</Link>,
        },
        {
            key: "/admin/product",
            label: <Link href={`/admin/products`}>Products</Link>,
        },
    ];
    return (
        <Sider
            className='dashboard-sider pt-20 h-screen'
            breakpoint='lg'
            collapsedWidth='0'>
            <Menu
                className='dashboard-menu'
                theme='dark'
                mode='inline'
                defaultSelectedKeys={["/admin"]}
                items={sidebarItems}
            />
        </Sider>
    );
};

export default SideBar;
