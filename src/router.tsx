import { createBrowserRouter } from 'react-router-dom';
import { ForgotPassword, Home, Login, Register } from './routes';

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
    }
]);

export default router;
