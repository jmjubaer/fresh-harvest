"use client";
import { closeModal } from "@/redux/features/auth/authModalSlice";
import { Modal } from "antd";
import { useAppSelector } from "@/redux/hook";
import { useDispatch } from "react-redux";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

const AuthModal = () => {
    const authModal = useAppSelector((state) => state.authModal);
    const dispatch = useDispatch();
    return (
        <>
            <Modal
                className='auth-modal w-11/12! sm:w-4/5! lg:w-1/2! -tracking-[2%]'
                // closable={{ "aria-label": "Custom Close Button" }}
                open={authModal.isOpen}
                footer={null}
                onCancel={() => dispatch(closeModal())}>
                {authModal.type === "signup" ? <RegisterForm /> : <LoginForm />}
            </Modal>
        </>
    );
};

export default AuthModal;
