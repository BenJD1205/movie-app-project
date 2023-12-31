import type { Meta, StoryObj } from '@storybook/react';
import Loading from '.';

const meta = {
    title: 'Loading',
    component: Loading,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        isLoading: true,
    },
};
