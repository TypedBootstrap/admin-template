import React from 'react';

interface AuthContextProps {
    user: any;
    login: (user: any, callback: VoidFunction) => void;
    logout: (callback: VoidFunction) => void;
}

export const AuthContext = React.createContext<AuthContextProps>(null!);

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = props => {
    const [user, setUser] = React.useState<any>(null);

    const login = (user: any, callback: VoidFunction): void => {
        setUser(user);
        callback();
    };

    const logout = (callback: VoidFunction): void => {
        setUser(null);
        callback();
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {props.children}
        </AuthContext.Provider>
    );
};
