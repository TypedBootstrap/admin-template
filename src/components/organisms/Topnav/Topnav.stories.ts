import type { Meta, StoryObj } from '@storybook/react';
import Topnav from './Topnav';

const meta = {
    title: 'Organisms/Topnav',
    component: Topnav
} satisfies Meta<typeof Topnav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
