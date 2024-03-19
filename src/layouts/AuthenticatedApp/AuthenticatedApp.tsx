import React from 'react';
import { useAuth } from 'hooks';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export interface AuthenticatedAppProps {}

const AuthenticatedApp: React.FC<AuthenticatedAppProps> = () => {
    const auth = useAuth();

    const location = useLocation();

    const redirectedFrom: string = location.state?.redirectedFrom || '/';

    const isLoggedIn: boolean = !!auth.user;

    if (!isLoggedIn) {
        return <Navigate to="/login" state={{ redirectedFrom }} replace />;
    }

    return <Outlet />;
};

export default AuthenticatedApp;
