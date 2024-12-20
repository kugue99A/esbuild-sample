import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../../src'

const meta = {
  component: Button,
  tags: ['autodocs'],
  title: 'Button',
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Submit',
    onClick: () => {},
  },
}
