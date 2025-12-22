import { createSlice } from "@reduxjs/toolkit";

type TAuthModalType = "login" | "signup" | null;

type TAuthModalState = {
    isOpen: boolean;
    type: TAuthModalType;
}

const initialState: TAuthModalState = {
    isOpen: false,
    type: null,
};

const authModalSlice = createSlice({
    name: "authModal",
    initialState,
    reducers: {
        openLogin: (state) => {
            state.isOpen = true;
            state.type = "login";
        },
        openSignup: (state) => {
            state.isOpen = true;
            state.type = "signup";
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.type = null;
        },
    },
});

export const { openLogin, openSignup, closeModal } = authModalSlice.actions;

export default authModalSlice.reducer;
