import type { Meta, StoryObj } from '@storybook/react';
import NoMatchPage from './NoMatchPage';

const meta = {
    title: 'Pages/NoMatchPage',
    component: NoMatchPage
} satisfies Meta<typeof NoMatchPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
