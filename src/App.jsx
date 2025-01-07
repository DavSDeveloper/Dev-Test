// Importación de estilos
import "./App.css"; // Importa los estilos CSS asociados a la aplicación.

// Importaciones de React y dependencias
import React, { useState, useEffect } from "react"; // Importa React y hooks para gestionar estados y efectos.
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // Importa componentes para la navegación.

// Importación de componentes y páginas
import LoginForm from "./pages/LoginForm/LoginForm"; // Componente para el formulario de inicio de sesión.
import Companies from "./pages/Companies/Companies"; // Página que muestra una lista de compañías.
import CompanyPage from "./pages/CompanyPage/CompanyPage"; // Página para mostrar detalles de una compañía específica.
import PrivateRoute from "./utils/PrivateRoute"; // Componente que protege rutas privadas.
import Header from "./components/Header/Header"; // Componente del encabezado de la aplicación.

// Componente principal de la aplicación
const App = () => {
  // Estado que controla si el usuario está autenticado.
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect para verificar si el usuario tiene un token almacenado al cargar la aplicación.
  useEffect(() => {
    const token = localStorage.getItem("token"); // Busca el token en localStorage.
    setIsAuthenticated(!!token); // Establece `true` si hay token, `false` si no.
  }, []);

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem("token"); // Elimina el token del almacenamiento local.
    setIsAuthenticated(false); // Cambia el estado de autenticación a `false`.
  };

  return (
    <Router>
      {/* Encabezado de la aplicación */}
      <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />

      {/* Configuración de rutas */}
      <Routes>
        {/* Ruta pública: Inicio de sesión */}
        <Route
          path="/auth/login"
          element={<LoginForm setIsAuthenticated={setIsAuthenticated} />}
        />

        {/* Rutas privadas */}
        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/companies" element={<Companies />} />
          <Route path="/companies/:companyId" element={<CompanyPage />} />
        </Route>

        {/* Ruta por defecto: Redirección al inicio de sesión */}
        <Route path="*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
