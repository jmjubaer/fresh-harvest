import { TAuthUser } from "@/types/user.type";
import { createSlice } from "@reduxjs/toolkit";
type TAuthState = {
    user: TAuthUser | null;
    token: string | null;
};
const initialState: TAuthState = {
    user: null,
    token: null,
};
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { user, token } = action.payload;
            state.user = {
                id: user?.id,
                email: user?.email,
                role: user?.role,
                iat: user?.iat,
                exp: user?.exp,
            };
            state.token = token;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
        },
    },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
