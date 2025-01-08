import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import LoginForm from "./pages/LoginForm/LoginForm";
import Companies from "./pages/Companies/Companies";
import CompanyPage from "./pages/CompanyPage/CompanyPage";
import PrivateRoute from "./utils/PrivateRoute";
import Header from "./components/Header/Header";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/auth/login" element={<LoginForm />} />
          <Route element={<PrivateRoute />}>
            <Route path="/companies" element={<Companies />} />
            <Route path="/companies/:companyId" element={<CompanyPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/auth/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;