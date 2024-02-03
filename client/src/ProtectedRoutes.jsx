import React from "react";
import { getSession } from "./libs/userSession";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const isAuth = getSession();
  return isAuth ? <Outlet /> : <Navigate to="/user/login" />;
};

export default ProtectedRoutes;
