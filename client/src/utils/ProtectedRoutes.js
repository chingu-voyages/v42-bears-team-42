import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
  const access = sessionStorage.getItem('authToken');
  return access ? <Outlet /> : <Navigate to='/' />
}