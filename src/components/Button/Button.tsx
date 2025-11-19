import React from 'react';
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
    const disabledCls = disabled ? 'kit-btn--disabled' : '';
    const isIconCls = iconPath != '' && text === '' ? 'kit-btn--icon' : '';
    const isStaticIconCls = staticIcon ? 'kit-icon' : '';
    const textAlignCls = labelAlign === 'right' || labelAlign === 'left' ? 'kit-btn--row' : 'kit-btn--column';

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
        case 'right': Content = () => (<div className='kit-container--h'><IconContainer />{text}</div>); break;
        case 'left': Content = () => (<div className='kit-container--h'>{text}<IconContainer /></div>); break;
        case 'top': Content = () => (<div className='kit-container--v'>{text}<IconContainer /></div>); break;
        case 'bottom': Content = () => (<div className='kit-container--v'><IconContainer />{text}</div>); break;
        default: Content = () => (<div className='kit-container--h'>{ isIconCls ? <IconContainer /> : text}</div>); break;
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
                isStaticIconCls,
                disabledCls,
                isIconCls,
                textAlignCls,
                cls
            ].join(' ')}
            {...props}
        >
            <Content />
        </button>
    );
};
