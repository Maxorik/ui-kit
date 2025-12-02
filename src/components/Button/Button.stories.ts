import type { StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta = {
  title: 'Example Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const script = document.createElement('script')
      script.src = '/style_setter.js'
      script.type = 'module'
      document.head.appendChild(script)

      return Story()
    },
  ],
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
    onClick: () => console.log('CustomButton')
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
    onClick: () => console.log('IconButton'),
    iconPath: 'svg/alert-square.svg',
    labelAlign: 'bottom'
  },
};

export const Icon: Story = {
  args: {
    onClick: () => console.log('Icon'),
    iconPath: 'svg/alert-square.svg',
    type: 'transparent',
    size: 'large',
    corners: 'round',
    disabled: false,
    cls: '',
    staticIcon: true
  },
};

