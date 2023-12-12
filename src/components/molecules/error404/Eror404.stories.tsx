import type { Meta, StoryObj } from '@storybook/react'
import Error404 from '.'

const meta = {
    title: 'Error404',
    component: Error404,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Error404>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
}
