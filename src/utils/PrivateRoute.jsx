import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  // Verifica si el usuario está autenticado comprobando la existencia de un token en el localStorage
  const isAuthenticated = !!localStorage.getItem("token");

  // Si el usuario está autenticado, renderiza los componentes hijos dentro de <Outlet>
  // Si no está autenticado, redirige al usuario a la página de inicio de sesión
  return isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default PrivateRoute;
