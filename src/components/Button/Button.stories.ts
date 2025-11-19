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
    disabled: false,
    cls: '',
    onClick: () => console.log('123456')
  },
};

export const IconButton: Story = {
  args: {
    text: 'Exit',
    type: 'secondary',
    size: 'medium',
    corners: 'standard',
    disabled: false,
    cls: '',
    onClick: () => console.log('sdfg'),
    iconPath: 'assets/alert-square.svg',
    labelAlign: 'right'
  },
};

export const Icon: Story = {
  args: {
    onClick: () => console.log('sdfg'),
    iconPath: 'assets/alert-square.svg',
    type: 'transparent',
    size: 'medium',
    corners: 'round',
    disabled: false,
    cls: '',
    staticIcon: true
  },
};

