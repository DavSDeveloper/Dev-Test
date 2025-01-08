import React from "react";
import { useMutation } from "@apollo/client";
import { Formik, Form, Field } from "formik";
import { TOKEN_AUTH } from "../../graphql/mutations";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./LoginForm.css";

const LoginForm = () => {
  const [tokenAuth, { loading, error }] = useMutation(TOKEN_AUTH);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const { data } = await tokenAuth({ variables: values });
      login(data.tokenAuth.token);
      navigate("/companies");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="form">
            <div className="field">
              <label>Email</label>
              <Field name="email" type="email" required />
            </div>
            <div className="field">
              <label>Password</label>
              <Field name="password" type="password" required />
            </div>
            <button type="submit" className="button" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
            {error && <p className="error">Error: {error.message}</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;