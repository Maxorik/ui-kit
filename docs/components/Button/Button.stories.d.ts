import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: ({ type, size, corners, disabled, staticIcon, cls, text, iconPath, labelAlign, onClick, ...props }: import('./Button').ButtonProps) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
    decorators: ((Story: any) => any)[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const CustomButton: Story;
export declare const IconButton: Story;
export declare const Icon: Story;
