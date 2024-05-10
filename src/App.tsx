import React from 'react';
import { Authenticated, Authentication, Default, Error, Unauthenticated } from 'layouts';
import { Route, Routes } from 'react-router-dom';
import { ForgotPassword, Home, Login, NoMatch, Register } from './routes';

function App() {
    return (
        <Routes>
            {/* Authenticated routes */}
            <Route element={<Authenticated />}>
                <Route element={<Default />}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Route>

            {/* Unauthenticated routes */}
            <Route element={<Unauthenticated />}>
                <Route element={<Authentication />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="forgot-password" element={<ForgotPassword />} />
                </Route>
            </Route>

            <Route element={<Error />}>
                <Route path="*" element={<NoMatch />} />
            </Route>
        </Routes>
    );
}

export default App;
