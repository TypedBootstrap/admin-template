import React from 'react';
import { AuthenticatedApp, UnauthenticatedApp } from 'layouts';
import { Route, Routes } from 'react-router-dom';
import { ForgotPassword, Home, Login, NoMatch, Register } from './routes';

function App() {
    return (
        <Routes>
            {/* Authenticated routes */}
            <Route element={<AuthenticatedApp />}>
                <Route path="/" element={<Home />} />
            </Route>

            {/* Unauthenticated routes */}
            <Route element={<UnauthenticatedApp />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="forgot-password" element={<ForgotPassword />} />
            </Route>

            <Route path="*" element={<NoMatch />} />
        </Routes>
    );
}

export default App;
