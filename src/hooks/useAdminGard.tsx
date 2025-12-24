"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { openLogin } from "@/redux/features/auth/authModalSlice";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";

export const useAdminGuard = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const { user, token } = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        if (!token) {
            dispatch(openLogin());
            router.replace("/");
            return;
        }

        if (user?.role !== "admin") {
            Swal.fire({
                title: "Warning",
                text: "You are not an admin. Please login as admin",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#749b3f",
                cancelButtonColor: "#d33",
                confirmButtonText: "Log In",
            }).then((result) => {
                if (result.isConfirmed) {
                    dispatch(openLogin());
                }
            });

            router.replace("/");
        }
    }, [token, user, dispatch, router]);
};
