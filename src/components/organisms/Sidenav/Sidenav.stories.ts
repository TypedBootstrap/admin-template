import type { Meta, StoryObj } from '@storybook/react';
import Sidenav from './Sidenav';

const meta = {
    title: 'Organisms/Sidenav',
    component: Sidenav
} satisfies Meta<typeof Sidenav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
