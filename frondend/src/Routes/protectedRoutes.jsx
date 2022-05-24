import react, { useContext, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Login from "../components/Modals/loginModal";

const useAuth = () => {
  const { user } = { loggedIn: true };
  return user && user.loggedIn;
};

export default function ProtectedRoutes() {
    const isAuthenticated = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
  ;
}
