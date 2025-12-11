/**
 * Утилиты для автоматического подбора цветов
 */


/** Возвращает hover-цвет
 * baseHex - цвет в формате #ffffff
 * k - процент затемнения, по умолчанию 15%
 * mode: 'dark' - более темный, чем основной
 * mode: 'light' - более светлый, чем основной
 * */
export function makeHoverColor(baseHex: string, k: number = 0.15, mode: 'dark' | 'light' = 'dark') {
    const { r, g, b } = hexToRgb(baseHex);
    const factor = mode === 'dark' ? 1 - k : 1 + k;

    return rgbToHex(
        r * factor,
        g * factor,
        b * factor
    );
}
function hexToRgb(hex) {
    hex = hex.replace('#', '');
    if (hex.length === 3) {
        hex = hex.split('').map(x => x + x).join('');
    }
    return {
        r: parseInt(hex.slice(1, 3), 16),
        g: parseInt(hex.slice(3, 5), 16),
        b: parseInt(hex.slice(5, 7), 16)
    };
}
function rgbToHex(r, g, b) {
    return (
        '#' + [r, g, b].map(x => Math.max(0, Math.min(255, Math.round(x))).toString(16).padStart(2, '0')).join('')
    );
}
