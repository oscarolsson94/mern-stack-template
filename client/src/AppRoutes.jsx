import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SecureRoute } from "./components/SecureRoute";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { User } from "./pages/User";

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" exact element={<Login />} />
                <Route path="/register" exact element={<Register />} />

                {/* Protected routes */}
                <Route element={<SecureRoute />}>
                    <Route path="/user" exact element={<User />} />
                </Route>
            </Routes>
        </Router>
    );
};
