import React from 'react';
import './button.scss';

export interface ButtonProps {
    type: 'primary' | 'transparent' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    corners?: 'square' | 'standard' | 'round';
    label: string;
    onClick?: () => void;
    style?: {};
}

/** Primary UI component for user interaction */
export const Button = ({
    type = 'primary',
    size = 'medium',
    corners = 'standard',
    style,
    label,
    ...props
}: ButtonProps) => {
    return (
        <button
            type="button"
            className={[
                'kit-btn',
                `kit-btn--${size}`,
                `kit-btn--${corners}`,
                `kit-btn--${type}`
            ].join(' ')}
            style={ style }
            {...props}
        >
            {label}
        </button>
    );
};
