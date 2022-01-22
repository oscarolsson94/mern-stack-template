import React from "react";
import { Navigate, Route } from "react-router-dom";
import jwt from "jsonwebtoken";

const AuthRoute = ({ ...routeProps }) => {
    const token = localStorage.getItem("token");
    if (token) {
        const user = jwt.decode(token);
        if (!user) {
            localStorage.removeItem("token");
            return <Navigate to="/" />;
        } else {
            return <Route {...routeProps} />;
        }
    }
};

export default AuthRoute;
