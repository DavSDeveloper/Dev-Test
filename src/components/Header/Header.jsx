import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/auth/login");
  };

  return (
    <header className="header">
      <div className="header-logo">
        <h1>Invoices App</h1>
      </div>
      <nav className="header-nav">
        {isAuthenticated && (
          <>
            <button
              onClick={() => navigate("/companies")}
              className="companiesButton"
            >
              Companies
            </button>
            <button onClick={handleLogout} className="logoutButton">
              Log Out
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
