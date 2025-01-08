import React from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/auth/login");
  };

  return (
    <header className="py-4 px-5 bg-slate-900 flex justify-between items-center text-white">
      <div>
        <h1 className="text-3xl m-0 text-cyan-400">Invoices App</h1>
      </div>
      <nav className="flex gap-4">
        {isAuthenticated && (
          <>
            <button
              onClick={() => navigate("/companies")}
              className="bg-green-700 text-white border-0 py-2 px-4 rounded cursor-pointer text-base hover:bg-green-800 duration-300"
            >
              Companies
            </button>
            <button onClick={handleLogout} className="bg-red-700 text-white border-0 py-2 px-4 rounded cursor-pointer text-base hover:bg-red-800 duration-300">
              Log Out
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
