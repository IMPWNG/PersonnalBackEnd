import React from "react";
import { Routes, Route } from "react-router-dom";

import Auth from "../pages/authPage";
import ProtectedRoutes from "../Routes/protectedRoutes";
import Dashboard from "../pages/dashboard";

import ErrorPage from "../pages/errorPage";

export default function Views() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
