import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { Box, Button } from "../index";
import './modal.scss';

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
    title?: string;             // TODO

    /** Кнопка закрытия в углу */
    closeButton?: boolean;
}

/** Элемент модалки */
export const Modal = ({
    width = 'auto',
    corners = 'standard',
    background = 'blackout',
    isOpen = false,
    closeButton = true,
    title = '',
    cls = '',
    children,
    onClose,
    ...props
}: ModalProps) => {
    const overlayRef = useRef<HTMLDivElement | null>(null);
    const [showModal, setShowModal] = useState(isOpen);

    function handleClose(): void {
        setShowModal(false);
        onClose && onClose();
    }

    /** только для демонстрации в userbook */
    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

    useEffect(() => {
        if (!showModal) return;

        function handleKeyDown(e) {
            if (e.key === 'Escape') handleClose();
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
    }, [showModal, handleClose]);

    return(
        <>
            {showModal ? <div
                className='kit-modal--overlay'
                onClick={(e) => {
                    if (e.target === overlayRef.current) handleClose()
                }}
                ref={overlayRef}
            >
                <div
                    className={[
                        'kit-modal',
                        `kit-modal--${corners}`,
                        `kit-modal--bg-${background}`,
                        cls
                    ].join(' ')}
                    style={{width: !isNaN(width as number) ? `${width}px` : 'fit-content'}}
                    {...props}>
                    <Box padding={[8, 16]} direction='column'>
                        <Box justify='end' margin={[0, -16]}>
                            <Button
                                type='transparent'
                                size='large'
                                onClick={handleClose}
                                iconPath='svg/close.svg'
                                cls='kit-modal-close'
                            />
                        </Box>
                        <Box justify='start'>
                            {children}
                        </Box>
                        { /** (необязательные) кнопки управления окном */}
                    </Box>
                </div>
            </div> : <></>}
        </>
    )
};