import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '../../src'

const meta = {
  component: Card,
  tags: ['autodocs'],
  title: 'Card',
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <>udagawa night</>,
  },
}
