import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import InnerContent from "../components/innerContent";
import Dashboard from "../pages/dashboard";
import Auth from "../pages/authPage";

import ProtectedRoutes from "../Routes/protectedRoutes";
import PublicRoutes from "../Routes/publicRoutes";
import PermissionDenied from "../Routes/permissionDenied";


export default function Views() {
  return (
    <Routes>

      {/** Protected Routes */}
      {/** Wrap all Route under ProtectedRoutes element */}
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/" element={<InnerContent />}>
          <Route path="/" element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Route>

      {/** Public Routes */}
      {/** Wrap all Route under PublicRoutes element */}
      <Route path="login" element={<PublicRoutes />}>
        <Route path="/login" element={<Auth />} />
      </Route>

      {/** Permission denied route */}
      <Route path="/denied" element={<PermissionDenied />} />
    </Routes>
  ); 
}
