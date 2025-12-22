import React, {useState, useId} from 'react';
import { Button } from "../Button";
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

    /** Ширина в px */
    width?: number;

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
    width,
    onChange,
    cls,
    ...props
}: InputProps) => {
    const [internalValue, setInternalValue] = useState<string | number>(value);
    const [error, setError] = useState<string>('');
    const inputId = useId();

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let val: string | number = e.target.value;

        if (type === 'number') {
            val = val.toString().replace(/\D/g, '');
        }

        if (mask && !mask.test(val.toString())) {
            setError(errorText || 'Некорректное значение'); // TODO нормальные текстовки
        } else {
            setError('');
        }

        setInternalValue(val);

        if (live && onChange) {
            onChange(val);
        }
    };

    const clearInput = () => {
        setInternalValue('');
    }

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
        className: [
            'kit-input',
            `kit-input--${corners}`,
            disabled ? 'kit-input--disabled' : '',
            error ? 'kit-input--error' : '',
            cls
        ].join(' ').trim()
    };

    return (
        <div className="kit-input--wrapper">
            { label && <div className='w5rem'>
                <label
                    for={ inputId }
                    className="kit-input--label kit-input-secondary-text"
                >
                    { label }
                </label>
            </div> }
            <div
                className="kit-input--container"
                style={{ 'width': width ? `${width}px` : 'auto' }}
            >
                { type === 'textarea' ? (
                    <textarea
                        id={ inputId }
                        { ...inputProps }
                    />
                ) : (
                    <input
                        { ...inputProps }
                        type={ type }
                        id={ inputId }
                    />
                )}

                <div className='kit-input--icon-container'>
                    { internalValue && <Button
                        type='transparent'
                        iconPath='svg-lib/input-svgrepo-com.svg'
                        size='small'
                        onClick={clearInput}
                        cls='kit-input--icon'
                    /> }
                    { isSearch && <Button
                        type='transparent'
                        iconPath='svg-lib/search-svgrepo-com.svg'
                        size='small'
                        staticIcon={live}
                        onClick={() => onChange && onChange(internalValue)}
                        cls='kit-input--icon'
                    /> }
                </div>
            </div>

            { !error && bottomText && <div className="kit-input-bottomtext kit-input-secondary-text">{bottomText}</div> }
            { error && <div className="kit-input-errortext kit-input-secondary-text">{error}</div> }
        </div>
    );
};
