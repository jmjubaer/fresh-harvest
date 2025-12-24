import DashboardLayout from "@/layout/DashboardLayout";
import ProtectedRoute from "@/layout/ProtectedRoute";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <DashboardLayout>
            <ProtectedRoute>{children}</ProtectedRoute>
        </DashboardLayout>
    );
};

export default layout;
