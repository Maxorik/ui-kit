import { ReactNode } from 'react';
/**
 * Компонент модальное окно
 * - размеры
 * - углы
 * - тип непрозрачности фона
 */
export interface ModalProps {
    /** Ширина */
    width?: number | 'auto';
    /** Углы прямые / Закругленные / Круглые */
    corners?: 'square' | 'standard' | 'round';
    /** Тип непрозрачности фона */
    background?: 'blackout' | 'blur';
    /** Содержимое контейнера **/
    children: ReactNode | string;
    /** Дополнительные классы */
    cls?: string;
    /** Операции при закрытии */
    onClose: () => void;
    /** Окно открыто */
    isOpen?: boolean;
    /** Title */
    title?: string;
    /** Кнопка закрытия в углу */
    closeButton?: boolean;
}
/** Элемент модалки */
export declare const Modal: ({ width, corners, background, isOpen, closeButton, title, cls, children, onClose, ...props }: ModalProps) => import("react/jsx-runtime").JSX.Element;
