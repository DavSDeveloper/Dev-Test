// Importamos las librerías necesarias
import React from "react"; // Importa React, una biblioteca para construir interfaces de usuario.
import ReactDOM from "react-dom/client"; // Importa la funcionalidad de ReactDOM para renderizar componentes en el DOM.
import App from "./App"; // Importa el componente principal de la aplicación.
import { ApolloProvider } from "@apollo/client"; // Importa ApolloProvider para proporcionar el cliente Apollo a la aplicación.
import client from "./utils/apolloClient"; // Importa el cliente Apollo configurado desde un archivo de utilidades.

// Este archivo es el punto de entrada principal de la aplicación React.
// Aquí se configura el renderizado inicial y se envuelve la aplicación con los proveedores necesarios.

// Creamos la raíz de React en el elemento con el id "root" del HTML.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* React.StrictMode activa comprobaciones adicionales para detectar problemas potenciales en el código */}
    <ApolloProvider client={client}>
      {/* ApolloProvider permite que todos los componentes de la aplicación accedan al cliente Apollo
          y gestionen consultas/mutaciones GraphQL */}
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
