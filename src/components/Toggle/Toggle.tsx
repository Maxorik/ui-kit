import React, { useId } from 'react';
import './toggle.scss';

/**
 * Компонент переключателя
 */

export interface ToggleProps {
    /** Маленькая / Средняя / Большая */
    size?: 'small' | 'medium' | 'large';

    /** Доступность переключателя */
    disabled?: boolean,

    /** Текст переключателя */
    text?: string;

    /** Событие при нажатии */
    onClick?: (e?: MouseEvent) => void;

    /** Дополнительные классы */
    cls?: string;
}

/** Элемент кнопки */
export const Toggle: React.FC<ToggleProps> = ({
    size = 'medium',
    disabled = false,
    cls = '',
    text = '',
    onClick,
    ...props
}) => {
    const toggleId = useId();

    return (
        <label
            htmlFor={toggleId}
            className={[
                'kit-toggle',
                disabled ? 'kit-toggle--disabled' : '',
                `kit-toggle--${size}`,
                cls
            ].join(' ')}
        >
            <input
                id={toggleId}
                type="checkbox"
                className="kit-toggle--input"
                disabled={disabled}
                defaultChecked={false}
                onChange={(e) => onClick?.(e.target.checked)}
            />

            <span className="kit-toggle--slider" aria-hidden="true" />

            {text && <span className="kit-toggle--label">{text}</span>}
        </label>
    );
};
