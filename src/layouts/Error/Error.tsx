import React from 'react';
import { ErrorLayout } from '@typedbootstrap/admin-components';
import { Footer } from 'components/organisms';
import { Outlet } from 'react-router-dom';

export interface ErrorProps {}

const Error: React.FC<ErrorProps> = () => (
    <ErrorLayout footer={<Footer />}>
        <Outlet />
    </ErrorLayout>
);

export default Error;
