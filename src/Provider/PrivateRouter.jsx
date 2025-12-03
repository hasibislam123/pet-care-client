import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext) || {};
    const location = useLocation();

    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
        </div>;
    }

    if (user) {
        return children;
    }

    return <Navigate to="/auth/login" state={{ from: location }} replace />;
};

export default PrivateRouter;