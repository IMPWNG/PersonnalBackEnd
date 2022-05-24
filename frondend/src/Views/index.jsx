import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Auth from "../pages/authPage";
import Dashboard from "../pages/dashboard";
// import Login from "../pages/Modals/loginModal";
// import Register from "../pages/Modals/registerModal";
// import ErrorPage from "../pages/errorPage";

export default function Views() {
  return (
    <Routes>
      <Route index element={<Auth />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

