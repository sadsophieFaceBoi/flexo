import type { Meta, StoryObj } from '@storybook/react';
import '../index.css';
import Button from '../components/Button/button';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "label"
  }
};