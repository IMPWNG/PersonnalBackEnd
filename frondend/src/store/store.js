import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../helpers/authSliceHelper";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});