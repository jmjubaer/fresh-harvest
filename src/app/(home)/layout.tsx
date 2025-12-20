import HomeLayout from "@/layout/HomeLayout";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return <HomeLayout>{children}</HomeLayout>;
};

export default MainLayout;
