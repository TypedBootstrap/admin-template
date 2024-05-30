import type { Meta, StoryObj } from '@storybook/react';
import Widget from './Widget';

const meta = {
    title: 'Organisms/Widget',
    component: Widget
} satisfies Meta<typeof Widget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        bg: 'primary',
        text: 'white',
        children: 'Primary Card',
        linkLabel: 'Label',
        linkTo: '#'
    }
};
