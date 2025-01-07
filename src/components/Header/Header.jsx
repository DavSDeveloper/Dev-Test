// Importaciones necesarias
import React from "react"; // Importa React, la biblioteca principal para construir interfaces de usuario.
import { useNavigate } from "react-router-dom"; // Hook para la navegación programada.
import "./Header.css"; // Importa los estilos CSS para el componente.

// Componente funcional: Header
// Este componente muestra el encabezado de la aplicación, con opciones de navegación y cierre de sesión.
const Header = ({ isAuthenticated, onLogout }) => {
  const navigate = useNavigate(); // Hook para programar la navegación dentro de la aplicación.

  // Función para navegar a la página de compañías
  const handleNavigateToCompanies = () => {
    navigate("/companies"); // Navega a la ruta "/companies".
  };

  return (
    <header className="header"> {/* Contenedor principal del encabezado */}
      <div className="header-logo">
        <h1>Invoices App</h1> {/* Nombre o logo de la aplicación */}
      </div>
      <nav className="header-nav"> {/* Contenedor de la navegación */}
        {isAuthenticated && ( /* Opciones de navegación visibles solo si el usuario está autenticado */
          <>
            <button
              onClick={handleNavigateToCompanies} // Navega a "Companies" al hacer clic.
              className="navButton"
            >
              Companies
            </button>
            <button
              onClick={onLogout} // Llama a la función `onLogout` al hacer clic.
              className="logoutButton"
            >
              Log Out
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header; // Exporta el componente para su uso en otros archivos.
