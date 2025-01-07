// Importaciones necesarias
import React from "react"; // Importa React, la biblioteca principal para construir interfaces de usuario.
import './Loader.css'; // Importa los estilos CSS asociados al componente Loader.

// Componente funcional: Loader
// Este componente se utiliza para mostrar un indicador de carga (spinner) y un mensaje de "Cargando..." mientras se espera una respuesta de la aplicación.
const Loader = () => {
  return (
    <div className="loader"> {/* Contenedor principal del indicador de carga */}
      <div className="spinner"></div> {/* Elemento visual que representa el spinner */}
      <p>Loading...</p> {/* Mensaje de texto que indica que los datos están siendo cargados */}
    </div>
  );
};

export default Loader; // Exporta el componente para su uso en otros archivos.
