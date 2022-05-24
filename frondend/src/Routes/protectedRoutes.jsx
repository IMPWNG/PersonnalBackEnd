import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";


export default function ProtectedRoutes() {
  const user = useSelector((state) => state.user);
  const loading = useSelector((state) => state.loading);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/dashboard" replace state={{ from: location }} />;
    } 
  return (
    <Outlet />
  );
  
}
//https://stackoverflow.com/questions/70651782/how-to-use-redirect-react-router-dom-v6