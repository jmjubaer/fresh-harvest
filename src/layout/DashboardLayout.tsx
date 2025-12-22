import DashboardNav from "@/page/Dashboard/DashboardNav";
import SideBar from "@/page/Dashboard/SideBar";
import { Layout } from "antd";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Layout className='h-screen '>
            {/* Dashboard Sidebar  */}
            <SideBar />
            <DashboardNav />
            <Layout>
                {/* Dashboard Body  */}
                <div
                    className='h-screen overflow-auto'
                    style={{ scrollbarWidth: "none" }}>
                    <div className='p-5'>{children}</div>
                </div>
            </Layout>
        </Layout>
    );
};

export default DashboardLayout;
