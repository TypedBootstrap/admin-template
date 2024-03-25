import React from 'react';
import type { LoginFormHelpers, LoginFormValues } from 'components/organisms';
import { LoginPage } from 'components/pages';
import { useAuth } from 'hooks';

export interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
    const { login } = useAuth();

    const initialLoginFormValues: LoginFormValues = {
        email: '',
        password: ''
    };

    const onLoginFormSubmit = (values: LoginFormValues, __: LoginFormHelpers): void => {
        login(values, () => {})
    };

    return <LoginPage {...{ initialLoginFormValues, onLoginFormSubmit }} />;
};

export default Login;
