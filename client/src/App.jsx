import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/register" element={<RegisterPage />} />
          <Route path="/user/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
