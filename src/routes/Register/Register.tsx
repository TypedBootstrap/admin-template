import React from 'react';
import type { RegisterFormHelpers, RegisterFormValues } from 'components/organisms';
import { RegisterPage } from 'components/pages';

export interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
    const initialRegisterFormValues: RegisterFormValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirm: ''
    };

    const onRegisterFormSubmit = (_: RegisterFormValues, __: RegisterFormHelpers): void => {};

    return <RegisterPage {...{ initialRegisterFormValues, onRegisterFormSubmit }} />;
};

export default Register;
