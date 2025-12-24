import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: ({ width, corners, background, isOpen, closeButton, title, cls, children, onClose, ...props }: import('./Modal').ModalProps) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
    decorators: ((Story: any) => any)[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const ModalWindow: Story;
