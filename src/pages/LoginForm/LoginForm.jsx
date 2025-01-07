import React from "react";
import { useMutation } from "@apollo/client";
import { Formik, Form, Field } from "formik";
import { TOKEN_AUTH } from "../../graphql/mutations";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = ({ setIsAuthenticated }) => {
  // Hook para ejecutar la mutación de autenticación con GraphQL
  const [tokenAuth, { loading, error }] = useMutation(TOKEN_AUTH);
  
  // Hook de React Router para redirigir después del inicio de sesión
  const navigate = useNavigate();

  // Función que maneja el envío del formulario
  const handleSubmit = async (values) => {
    try {
      // Ejecuta la mutación con las variables del formulario (email y password)
      const { data } = await tokenAuth({ variables: values });
      
      // Almacena el token JWT en el almacenamiento local del navegador
      localStorage.setItem("token", data.tokenAuth.token);
      
      // Cambia el estado de autenticación a true
      setIsAuthenticated(true);
      
      // Redirige a la página de empresas (dashboard)
      navigate("/companies");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <Formik
        initialValues={{ email: "", password: "" }} // Valores iniciales del formulario
        onSubmit={handleSubmit} // Función que se ejecuta cuando el formulario se envía
      >
        {() => (
          <Form className="form">
            <div className="field">
              <label>Email</label>
              <Field name="email" type="email" required /> {/* Campo de email */}
            </div>
            <div className="field">
              <label>Password</label>
              <Field name="password" type="password" required /> {/* Campo de contraseña */}
            </div>
            <button type="submit" className="button" disabled={loading}>
              {loading ? "Logging in..." : "Login"} {/* Texto del botón según el estado de carga */}
            </button>
            {error && <p className="error">Error: {error.message}</p>} {/* Muestra un error si ocurre */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
