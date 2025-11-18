import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
}

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomButton: Story = {
  args: {
    text: 'Button Example',
    type: 'primary',
    size: 'medium',
    corners: 'standard',
    onClick: () => console.log('123456')
  },
};
