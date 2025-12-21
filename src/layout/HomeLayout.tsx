import Footer from "@/page/shered/Footer";
import Navbar from "@/page/shered/Navbar";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <div className='min-h-screen'>{children}</div>
            <Footer />
        </>
    );
};

export default HomeLayout;
