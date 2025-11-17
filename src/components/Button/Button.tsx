import React from 'react';
import './button.scss';

export interface ButtonProps {
    primaryType: 'primary' | 'secondary' | 'transparent';
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    corners?: 'square' | 'standard' | 'round';
    label: string;
    isIcon?: boolean;
    onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
    primaryType = 'primary',
    size = 'medium',
    corners = 'standard',
    isIcon = false,
    backgroundColor,
    label,
    ...props
}: ButtonProps) => {
    const iconCls = isIcon ? 'kit-btn--icon' : '';
    return (
        <button
            type="button"
            className={['kit-btn', `kit-btn--${size}`, `kit-btn--${corners}`, `kit-btn--${primaryType}`, iconCls].join(' ')}
            style={{ backgroundColor }}
            {...props}
        >
            {label}
        </button>
    );
};
