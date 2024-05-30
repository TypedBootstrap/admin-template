import type { Meta, StoryObj } from '@storybook/react';
import RegisterForm from './RegisterForm';

const meta = {
    title: 'Organisms/RegisterForm',
    component: RegisterForm
} satisfies Meta<typeof RegisterForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirm: ''
        },
        onSubmit: () => {}
    }
};
