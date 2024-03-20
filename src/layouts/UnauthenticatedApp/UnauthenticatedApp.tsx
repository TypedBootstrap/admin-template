import React from 'react';
import { useAuth } from 'hooks';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export interface UnauthenticatedAppProps {}

const UnauthenticatedApp: React.FC<UnauthenticatedAppProps> = () => {
    const auth = useAuth();

    const location = useLocation();

    const redirectedFrom: string = location.state?.redirectedFrom || '/';

    const isLoggedIn: boolean = !!auth.user;

    if (isLoggedIn) {
        return <Navigate to={redirectedFrom} replace />;
    }

    return <Outlet />;
};

export default UnauthenticatedApp;
