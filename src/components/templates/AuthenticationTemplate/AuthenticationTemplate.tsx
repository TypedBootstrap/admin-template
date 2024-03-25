import React from 'react';
import { AuthenticationLayout } from '@typedbootstrap/admin-components';
import { Footer } from 'components/organisms';

export interface AuthenticationTemplateProps {
    children?: React.ReactNode;
}

const AuthenticationTemplate: React.FC<AuthenticationTemplateProps> = ({ children }) => (
    <AuthenticationLayout footer={<Footer />}>
        <main>{children}</main>
    </AuthenticationLayout>
);

export default AuthenticationTemplate;
