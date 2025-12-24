/**
 * Компонент поля для ввода текста
 * - тип (текст, цифры, пароль)
 * - это поисковая строка (значок лупы)
 * - валидация
 */
export interface InputProps {
    /** Значение */
    value?: string | number;
    /** Текстовое поле \ цифровое \ пароль \ textarea */
    type?: 'text' | 'number' | 'password' | 'email' | 'date' | 'tel' | 'time' | 'textarea';
    /** Углы прямые / Закругленные / Круглые */
    corners?: 'square' | 'standard' | 'round';
    /** Доступность поля */
    disabled?: boolean;
    /** Текст над полем */
    label?: string;
    /** Текст под полем */
    bottomText?: string;
    /** Плейсхолдер */
    placeholder?: string;
    /** Живой поиск */
    live?: boolean;
    /** Событие при изменении */
    onChange?: (value?: string | number) => void;
    /** Это поиск */
    isSearch?: boolean;
    /** Валидация */
    mask?: RegExp;
    /** Ошибки валидации */
    errorText: string;
    /** Ширина в px */
    width?: number;
    /** Дополнительные классы */
    cls?: string;
}
/** Элемент кнопки */
export declare const Input: ({ value, type, corners, disabled, label, bottomText, placeholder, errorText, live, isSearch, mask, width, onChange, cls, ...props }: InputProps) => import("react/jsx-runtime").JSX.Element;
