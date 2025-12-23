import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import authModalReducer from "./features/auth/authModalSlice";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from "redux-persist";
import { authPersistReducer } from "./features/auth/authPersistReducer";
export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        authModal: authModalReducer,
        auth: authPersistReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // ignore for redux persist
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);
// Infer the type of makeStore
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
