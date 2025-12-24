import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: import('react').FC<import('./Toggle').ToggleProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
    decorators: ((Story: any) => any)[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const CustomToggle: Story;
