import type { StoryObj } from '@storybook/react-vite';
import { Input } from './Input';

const meta = {
  title: 'Example Input',
  component: Input,
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
    text: 'Text Input'
  },
};

