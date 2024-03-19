import React from 'react';
import { useAuth } from 'hooks';
import { Navigate, useLocation } from 'react-router-dom';

interface UserContextProps {}

export const UserContext = React.createContext({} as UserContextProps);

interface UserProviderProps {
    children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = props => {
    const auth = useAuth();

    const location = useLocation();

    if (!auth.user) {
        return <Navigate to="/login" state={{ redirectedFrom: location }} replace />;
    }

    return <UserContext.Provider value={{ ...auth.user }}>{props.children}</UserContext.Provider>;
};
