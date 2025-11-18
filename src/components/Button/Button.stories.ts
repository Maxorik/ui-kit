import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Button } from './Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    panelPosition: 'right'
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
}

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomButton: Story = {
  args: {
    label: 'Button Example',
    type: 'primary',
    size: 'medium',
    corners: 'standard'
  },
};
