import React from 'react';
import { Box } from "../Container/Box";
import './button.scss';

/**
 * Компонент кнопки
 * - разные состояния
 * - разные типы
 * - разные размеры
 * - разные углы
 * - добавление иконки
 */

export interface ButtonProps {
    /** Основная / Только текст / Вспомогательная */
    type: 'primary' | 'transparent' | 'secondary';

    /** Маленькая / Средняя / Большая */
    size?: 'small' | 'medium' | 'large';

    /** Углы прямые / Закругленные / Круглые */
    corners?: 'square' | 'standard' | 'round';

    /** Доступность кнопки */
    disabled?: boolean,

    /** Текст кнопки */
    text?: string;

    /** Событие при нажатии */
    onClick?: (e?: MouseEvent) => void;

    /** Дополнительные классы */
    cls?: string;

    /** Путь до иконки */
    iconPath?: string;

    /** Расположение текста относительно иконки */
    labelAlign?: 'right' | 'left' | 'bottom' | 'top';

    /** Это просто информационная иконка */
    staticIcon?: boolean;
}

/** Элемент кнопки */
export const Button = ({
    type = 'primary',
    size = 'medium',
    corners = 'standard',
    disabled = false,
    staticIcon = false,
    cls = '',
    text = '',
    iconPath = '',
    labelAlign = '',
    onClick,
    ...props
}: ButtonProps) => {
    const isIconCls = iconPath != '' && text === '' ? 'kit-btn--icon' : '';

    let Content;
    const IconContainer = () => (iconPath ? <div
        className='kit-btn--svg'
        style={{
            maskImage: `url(${iconPath})`,
            WebkitMaskImage: `url(${iconPath})`
        }}
    /> : null);

    /** текст + иконка */
    switch(labelAlign) {
        case 'right': Content = () => (<Box direction='row'><IconContainer />{text as string}</Box>); break;
        case 'left': Content = () => (<Box direction='row'>{text as string}<IconContainer /></Box>); break;
        case 'top': Content = () => (<Box direction='column'>{text as string}<IconContainer /></Box>); break;
        case 'bottom': Content = () => (<Box direction='column'><IconContainer />{text as string}</Box>); break;
        default: Content = () => (<Box direction='row'>{ isIconCls ? <IconContainer /> : text as string}</Box>); break;
    }

    return (
        <button
            type="button"
            onClick={disabled || !onClick ? null : onClick}
            className={[
                'kit-btn',
                `kit-btn--${size}`,
                `kit-btn--${corners}`,
                `kit-btn--${type}`,
                disabled && 'kit-btn--disabled',
                staticIcon && 'kit-icon',
                isIconCls,
                cls
            ].join(' ')}
            {...props}
        >
            <Content />
        </button>
    );
};
