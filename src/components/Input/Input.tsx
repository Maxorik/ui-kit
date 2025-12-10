import React, {useState} from 'react';
import './input.scss';

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
    disabled?: boolean,

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

    /** Дополнительные классы */
    cls?: string;
}

/** Элемент кнопки */
export const Input = ({
    value='',
    type='text',
    corners='standard',
    disabled=false,
    label='',
    bottomText='',
    placeholder='',
    errorText='',
    live=false,
    isSearch=false,
    mask,
    onChange,
    cls,
    ...props
}: InputProps) => {
    const [internalValue, setInternalValue] = useState<string | number>(value);
    const [error, setError] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let val: string | number = e.target.value;

        if (type === 'numeric') {
            val = val.replace(/\D/g, ''); // оставляем только цифры
        }

        if (mask && !mask.test(val.toString())) {
            setError(errorText || 'Некорректное значение');
        } else {
            setError('');
        }

        setInternalValue(val);

        if (live && onChange) {
            onChange(val);
        }
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (!live && onChange) {
            onChange(internalValue);
        }
    };

    const inputProps = {
        value: internalValue,
        placeholder,
        onChange: handleChange,
        onBlur: handleBlur,
        className: `input-field ${cls} ${error ? 'input-error' : ''}`,
    };

    return (
        <div className="input-wrapper">
            {label && <label className="input-label">{label}</label>}
            <div className="input-container" style={{ position: 'relative' }}>
                {type === 'textarea' ? (
                    <textarea {...inputProps} />
                ) : (
                    <input
                        {...inputProps}
                        type={type} 
                    />
                )}

                {isSearch && (
                    <span className="input-icon" style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)' }}>
                        🔍
                    </span>
                )}
            </div>

            {bottomText && <div className="input-bottom-text">{bottomText}</div>}
            {error && <div className="input-error-text">{error}</div>}
        </div>
    );
};
