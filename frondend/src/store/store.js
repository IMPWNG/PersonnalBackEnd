import { configureStore } from "@reduxjs/toolkit";
import authHelpers from "../helpers/authHelper"

export const store = configureStore({
    reducer: {
        auth: authHelpers,
    },
});