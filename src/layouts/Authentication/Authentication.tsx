import React from 'react';
import { AuthenticationLayout } from '@typedbootstrap/admin-components';
import { Footer } from 'components/organisms';
import { Outlet } from 'react-router-dom';

export interface AuthenticationProps {}

const Authentication: React.FC<AuthenticationProps> = () => (
    <AuthenticationLayout footer={<Footer />}>
        <Outlet />
    </AuthenticationLayout>
);

export default Authentication;
