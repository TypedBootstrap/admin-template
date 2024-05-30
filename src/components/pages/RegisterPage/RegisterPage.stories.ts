import type { Meta, StoryObj } from '@storybook/react';
import RegisterPage from './RegisterPage';

const meta = {
    title: 'Pages/RegisterPage',
    component: RegisterPage
} satisfies Meta<typeof RegisterPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        initialRegisterFormValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirm: ''
        },
        onRegisterFormSubmit: () => {}
    }
};
