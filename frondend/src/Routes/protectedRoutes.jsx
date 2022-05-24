import react, { useContext, useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "../components/Modals/loginModal";


export default function ProtectedRoutes() {

  const { user } = useSelector((state) => state.user);


  return (
    <>
      <Outlet /> : <Navigate to="/dashboard" />
    </>
  );
}
