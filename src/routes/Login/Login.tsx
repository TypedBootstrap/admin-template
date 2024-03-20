import React from 'react';
import type { LoginFormHelpers, LoginFormValues } from 'components/organisms';
import { LoginPage } from 'components/pages';

export interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
    const initialLoginFormValues: LoginFormValues = {
        email: '',
        password: ''
    };

    const onLoginFormSubmit = (_: LoginFormValues, __: LoginFormHelpers): void => {
        // TODO: Implement login
    };

    return <LoginPage {...{ initialLoginFormValues, onLoginFormSubmit }} />;
};

export default Login;
