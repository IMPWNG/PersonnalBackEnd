import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


export default function ProtectedRoutes() {
  const user = useSelector((state) => state.user);
  const loading = useSelector((state) => state.loading);
  
  if (loading) {
    return <h1>Loading...</h1>;
  } else if (!user) {
    <>
      <Outlet /> : <Navigate to="/dashboard" />
    </>;
    
  }
}