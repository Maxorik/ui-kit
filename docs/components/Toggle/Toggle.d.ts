import { default as React } from 'react';
/**
 * Компонент переключателя
 */
export interface ToggleProps {
    /** Маленькая / Средняя / Большая */
    size?: 'small' | 'medium' | 'large';
    /** Доступность переключателя */
    disabled?: boolean;
    /** Текст переключателя */
    text?: string;
    /** Событие при нажатии */
    onClick?: (e?: MouseEvent) => void;
    /** Дополнительные классы */
    cls?: string;
}
/** Элемент кнопки */
export declare const Toggle: React.FC<ToggleProps>;
