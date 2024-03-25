import React from 'react';
import { ErrorLayout } from '@typedbootstrap/admin-components';
import { Footer } from 'components/organisms';

export interface ErrorTemplateProps {
    children?: React.ReactNode;
}

const ErrorTemplate: React.FC<ErrorTemplateProps> = ({ children }) => (
    <ErrorLayout footer={<Footer />}>
        <main>{children}</main>
    </ErrorLayout>
);

export default ErrorTemplate;
