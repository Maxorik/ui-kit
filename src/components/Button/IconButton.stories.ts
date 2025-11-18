import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconButton } from './IconButton';

const meta = {
  title: 'Example/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomIconButton: Story = {
  args: {
    label: 'Button Example',
    type: 'primary',
    size: 'medium',
    corners: 'standard'
  },
};
