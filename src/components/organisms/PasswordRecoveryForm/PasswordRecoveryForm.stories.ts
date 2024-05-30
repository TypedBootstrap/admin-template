import type { Meta, StoryObj } from '@storybook/react';
import PasswordRecoveryForm from './PasswordRecoveryForm';

const meta = {
    title: 'Organisms/PasswordRecoveryForm',
    component: PasswordRecoveryForm
} satisfies Meta<typeof PasswordRecoveryForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        initialValues: {
            email: ''
        },
        onSubmit: () => {}
    }
};
