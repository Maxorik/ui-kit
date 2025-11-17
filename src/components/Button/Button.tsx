import React from 'react';
import './button.scss';

export interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    corners?: 'square' | 'standard' | 'round';
    label: string;
    onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
    primary = false,
    size = 'medium',
    backgroundColor,
    label,
    ...props
}: ButtonProps) => {
    const mode = primary ? 'kit-button--primary' : 'kit-button--secondary';
    return (
        <button
            type="button"
            className={['kit-button', `kit-button--${size}`, mode].join(' ')}
            style={{ backgroundColor }}
            {...props}
        >
            {label}
        </button>
    );
};
