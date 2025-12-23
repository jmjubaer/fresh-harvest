import storage from "redux-persist/lib/storage";
import authReducer from "./authSlice";
import {
    persistReducer,
} from "redux-persist";
const persistConfig = {
    key: "auth",
    storage,
};
export const authPersistReducer = persistReducer(persistConfig, authReducer);
