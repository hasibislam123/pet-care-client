import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext/AuthContext';
import { Navigate } from 'react-router';

const PrivateRaoute = ({ children }) => {
    const { user, loading } = use(AuthContext);

    if (loading) {
        <span className="loading loading-spinner text-info"></span>
    }

    if (user) {
        return children
    }

    return <Navigate to='/login '></Navigate>;
};

export default PrivateRaoute;