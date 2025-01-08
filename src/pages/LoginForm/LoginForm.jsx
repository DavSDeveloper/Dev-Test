import React from "react";
import { useMutation } from "@apollo/client";
import { Formik, Form, Field } from "formik";
import { TOKEN_AUTH } from "../../graphql/mutations";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

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
    <div className="max-w-96 mt-12 mx-auto mb-0 p-5 bg-slate-50 rounded-lg shadow-lg">
      <h1 className="text-2xl text-slate-900 font-bold mb-5">Login</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="flex flex-col">
            <div className="mb-5">
              <label className="text-base font-bold text-slate-900 mb-1 block">Email</label>
              <Field className="w-full p-3 text-base border-2 border-slate-300 rounded-md outline-none mt-1 box-border focus:border-blue-400 shadow-teal-900 duration-300" name="email" type="email" required />
            </div>
            <div className="field">
              <label className="text-base font-bold text-slate-900 mb-1 block">Password</label>
              <Field className="w-full p-3 text-base border-2 border-slate-300 rounded-md outline-none mt-1 box-border focus:border-blue-400 shadow-teal-900 duration-300" name="password" type="password" required />
            </div>
            <button type="submit" className="p-3 bg-blue-400 text-white rounded-md text-base cursor-pointer mt-4 box-border hover:bg-blue-500 duration-300 disabled:bg-gray-400cursor-not-allowed" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
            {error && <p className="text-red-600 text-sm mt-2 font-bold">Error: {error.message}</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;