import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createContext } from "react";

export const server = "https://nodejs-todo-backend-2had.onrender.com/api/v1";

export const Context = createContext({ isAuthenticated: false });

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <Context.Provider
      value={{ isAuthenticated, setIsAuthenticated, loading, setLoading }}
    >
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
