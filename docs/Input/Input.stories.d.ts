import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: ({ value, type, corners, disabled, label, bottomText, placeholder, errorText, live, isSearch, mask, width, onChange, cls, ...props }: import('./Input').InputProps) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
    decorators: ((Story: any) => any)[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const TextField: Story;
export declare const Search: Story;
