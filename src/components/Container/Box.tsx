import React, { ReactNode } from 'react';
import './box.scss';

/**
 * Компоненты контейнеры
 * - разные направления
 * - семантические обертки
 * - позиционирование
 */


export interface BoxProps {
    /** Направление строка или столбец */
    direction?: 'row' | 'column';

    /** Горизонтальное выравнивание **/
    align?: 'top' | 'center' | 'bottom';

    /** Горизонтальное распределение **/
    justify?: 'start' | 'end' | 'center' | 'space';

    /** Перенос блоков внутри контейнера **/
    wrapContent?: boolean;

    /** Дополнительные классы */
    cls?: string;

    /** Расстояние между дочерними элементами */
    gap?: number;

    /** Внешние отступы */
    margin?: number[];

    /** Внутренние отступы */
    padding?: number[];

    /** Родительский тег для семантики */
    parent?: 'header' | 'footer' | 'article' | 'section' | 'main';

    /** Содержимое контейнера **/
    children: ReactNode | string;

    /** Маска загрузки **/
    mask?: boolean
}

/** Элемент контейнера */
export const Box = ({
    direction = 'row',
    align = 'center',
    justify = 'center',
    wrapContent = false,
    cls = '',
    gap = 8,
    margin = [0],
    padding = [0],
    parent = 'div',
    mask = false,           // TODO loader
    children,
    ...props
}: BoxProps) => {
    const Parent = parent;
    const margins = margin?.join('px, ') + 'px';
    const paddings = padding?.join('px, ') + 'px';

    return(
        <Parent
            className={[
                'kit-box',
                `kit-box--${direction}`,
                `kit-box--align-${align}`,
                `kit-box--justify-${justify}`,
                wrapContent && 'kit-box--wrap',
                cls
            ].join(' ')}
            style={{ gap: `${gap}px`, margin: margins, padding: paddings }}
            {...props}
        >
            {children}
        </Parent>
    )

};