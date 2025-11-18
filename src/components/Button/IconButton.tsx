import React from 'react';
import './icon_button.scss';

export interface IconButtonProps {
    type: 'primary' | 'transparent' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    corners?: 'square' | 'standard' | 'round';
    label: string;
    onClick?: () => void;
    style?: {};
}

/** Primary UI component for user interaction */
export const IconButton = ({
    type = 'primary',
    size = 'medium',
    corners = 'standard',
    style,
    label,
    ...props
}: IconButtonProps) => {
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
