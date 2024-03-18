import { createBrowserRouter } from 'react-router-dom';
import { ForgotPassword, Home, Login, NoMatch, Register } from './routes';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/forgot-password',
        element: <ForgotPassword />
    },
    {
        path: '*',
        element: <NoMatch />
    }
]);

export default router;
