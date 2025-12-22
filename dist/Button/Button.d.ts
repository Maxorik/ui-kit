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
    disabled?: boolean;
    /** Текст кнопки */
    text?: string;
    /** Событие при нажатии */
    onClick?: (e?: MouseEvent) => void;
    /** Дополнительные классы */
    cls?: string;
    /** Путь до иконки из assets */
    iconPath?: string;
    /** Расположение текста относительно иконки */
    labelAlign?: 'right' | 'left' | 'bottom' | 'top';
    /** Это просто информационная иконка */
    staticIcon?: boolean;
}
/** Элемент кнопки */
export declare const Button: ({ type, size, corners, disabled, staticIcon, cls, text, iconPath, labelAlign, onClick, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
