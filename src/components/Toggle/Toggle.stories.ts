import type { StoryObj } from '@storybook/react-vite';
import { Toggle } from './Toggle';

const meta = {
  title: 'Example Toggle',
  component: Toggle,
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

export const CustomToggle: Story = {
  args: {
    text: 'subscribe',
    size: 'medium',
    disabled: false,
    cls: '',
    onClick: () => console.log('CustomToggle')
  },
};

