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

export const TextField: Story = {
  args: {
    label: 'Год вашего рождения',
    value: '2026',
    type: 'text',
    bottomText: 'Пишите только цифры',
    placeholder: 'Год в формате YYYY',
    errorText: 'Допустимы только цифры',
    mask: /^[0-9]+$/,
    width: 300
  },
};

export const Required: Story = {
  args: {
    label: 'Имя пользователя',
    value: '',
    type: 'text',
    placeholder: 'Введите имя',
    width: 300,
    required: true
  },
};

export const Search: Story = {
  args: {
    value: '',
    type: 'text',
    placeholder: 'Найти по имени или году',
    width: 250,
    live: true,
    isSearch: true
  },
};

