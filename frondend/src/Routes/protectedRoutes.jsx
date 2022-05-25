import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoutes() {
  const { user } = useSelector((state) => state.auth);

  if (user) {
    return user? (
      <>
        <Outlet />
      </>
    ) : (
      <Navigate to="/login" />
    );
  } else {
    return user ? <Outlet /> : <Navigate to="/login" />;
  }
}
