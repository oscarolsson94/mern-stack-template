import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

export const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/login" exact element={<Login />} />
                    <Route path="/register" exact element={<Register />} />
                </Routes>
            </Router>
        </div>
    );
};
