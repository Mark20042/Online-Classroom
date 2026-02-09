import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }) => {
    const token = localStorage.getItem("authToken");
    const userStr = localStorage.getItem("user");
    let user = null;

    if (userStr) {
        try {
            user = JSON.parse(userStr);
        } catch (e) {
            console.error("Failed to parse user from localStorage", e);
        }
    }

    // Not authenticated
    if (!token || !user) {
        return <Navigate to="/login" replace />;
    }

    // Role check (if allowedRoles is provided)
    if (allowedRoles && !allowedRoles.includes(user.role)) {
        // Redirect to home or unauthorized page if role doesn't match
        return <Navigate to="/" replace />;
    }

    // Authorized
    return <Outlet />;
};

export default ProtectedRoute;
