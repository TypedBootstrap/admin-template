import type { Meta, StoryObj } from '@storybook/react';
import ForgotPasswordPage from './ForgotPasswordPage';

const meta = {
    title: 'Pages/ForgotPasswordPage',
    component: ForgotPasswordPage
} satisfies Meta<typeof ForgotPasswordPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        initialPasswordRecoveryFormValues: {
            email: ''
        },
        onPasswordRecoveryFormSubmit: () => {}
    }
};
