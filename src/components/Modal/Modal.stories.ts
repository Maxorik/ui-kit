import type { StoryObj } from '@storybook/react-vite';
import { Modal } from './Modal';

const meta = {
    title: 'Modal',
    component: Modal,
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

export const ModalWindow: Story = {
    args: {
        width: 400,
        isOpen: true,
        children: 'This is modal window! You can close it.'
    }
};

