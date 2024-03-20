import React from 'react';
import type { PasswordRecoveryFormHelpers, PasswordRecoveryFormValues } from 'components/organisms';
import { ForgotPasswordPage } from 'components/pages';

export interface ForgotPasswordProps {}

const ForgotPassword: React.FC<ForgotPasswordProps> = () => {
    const initialPasswordRecoveryFormValues: PasswordRecoveryFormValues = {
        email: ''
    };

    const onPasswordRecoveryFormSubmit = (
        _: PasswordRecoveryFormValues,
        __: PasswordRecoveryFormHelpers
    ): void => {
        // TODO: Implement password recovery
    };

    return (
        <ForgotPasswordPage
            {...{ initialPasswordRecoveryFormValues, onPasswordRecoveryFormSubmit }}
        />
    );
};

export default ForgotPassword;
