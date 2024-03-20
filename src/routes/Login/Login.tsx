import React from 'react';
import { LoginPage } from '../../components/pages';
import type { LoginFormHelpers, LoginFormValues } from '../../components/organisms';

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
