import React, { ReactNode, useEffect, useRef } from 'react';
import { Box } from "../Container";
import './modal.scss';

/**
 * Компонент модальное окно
 * - размеры
 * - углы
 * - тип непрозрачности фона
 */


export interface ModalProps {
    /** Ширина */
    width?: number;

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
}

/** Элемент модалки */
export const Modal = ({
    width = 'auto',
    corners = 'standard',
    background = 'blackout',
    isOpen = false,
    title = '',
    cls = '',
    children,
    onClose,
    ...props
}: ModalProps) => {
    const overlayRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!isOpen) return;

        function handleKeyDown(e) {
            if (e.key === 'Escape') onClose();
        }

        // закрытие по Esc
        document.addEventListener('keydown', handleKeyDown);

        // блокировка скролла фона
        const original = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = original;
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [isOpen, onClose]);

    return(
        <div
            className='kit-modal--overlay'
            onclick={(e) => { if (e.target === overlayRef.current) onClose() }}
            ref={overlayRef}
        >
            <div
                className={[
                    'kit-modal',
                    `kit-modal--${corners}`,
                    `kit-modal--bg-${background}`,
                    cls
                ].join(' ')}
                style={{ width: !isNaN(width as number) ? `${width}px` : 'fit-content' }}
                {...props}>
                <Box padding={[16]} >
                    { /** TODO шапка, кнопка закрытия */ }
                    {children}
                    { /** (необязательные) кнопки управления окном */ }
                </Box>
            </div>
        </div>
    )
};