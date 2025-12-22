import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import authModalReducer from "./features/auth/authModalSlice";
export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        authModal: authModalReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
});

// Infer the type of makeStore
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
