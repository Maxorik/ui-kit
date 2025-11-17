import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Button } from './Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button Primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button Secondary',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button Large',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button Small',
  },
};
