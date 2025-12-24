import { ReactNode } from 'react';
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
    parent?: 'header' | 'footer' | 'article' | 'section' | 'main' | 'div';
    /** Содержимое контейнера **/
    children: ReactNode | string;
    /** Маска загрузки **/
    mask?: boolean;
}
/** Элемент контейнера */
export declare const Box: ({ direction, align, justify, wrapContent, cls, gap, margin, padding, parent, mask, children, ...props }: BoxProps) => import("react/jsx-runtime").JSX.Element;
