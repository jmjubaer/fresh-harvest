"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { RootState } from "@/redux/store";
import { openLogin } from "@/redux/features/auth/authModalSlice";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useDispatch();
    const router = useRouter();

    const { token, user } = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        if (!token) {
            dispatch(openLogin());
            router.replace("/");
            return;
        } else if (user?.role !== "admin") {
            Swal.fire({
                title: "Warning",
                text: "You are not an admin. Please login as admin",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#749b3f",
                cancelButtonColor: "#d33",
                confirmButtonText: "Log in",
            }).then((result) => {
                if (result.isConfirmed) {
                    dispatch(openLogin());
                }
            });

            router.replace("/");
            return;
        } else {
            return;
        }
    }, [token, user, dispatch, router]);

    return <>{children}</>;
};

export default ProtectedRoute;
