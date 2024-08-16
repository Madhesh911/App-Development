// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserProfilePage from "./pages/UserProfilePage";
import ShopList from "./components/ShopList";
import ShopDetail from "./components/ShopDetail";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile/:id" element={<UserProfilePage />} />
          <Route path="/shop/:id" element={<ShopDetail />} />
          <Route path="/category/:category" element={<ShopList />} />
        </Routes>
        </AuthProvider>
      </div>
    </Router>
  );
};

export default App;
