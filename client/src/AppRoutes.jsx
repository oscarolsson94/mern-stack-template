import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthRoute from "./components/SecureRoute";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { User } from "./pages/User";

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <AuthRoute path="/login" exact element={<Login />} />
                <AuthRoute path="/register" exact element={<Register />} />
                <AuthRoute path="/user" exact element={<User />} />
            </Routes>
        </Router>
    );
};
