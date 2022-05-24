import react, { useContext, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

import Login from "../pages/Modals/loginModal";

const useAuth = () => {
  const { user } = { loggedIn: false };
  return user && user.loggedIn;
};

export default function ProtectedRoutes() {
    const isAuthenticated = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
  ;
}
