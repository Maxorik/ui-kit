export type ThemeSettings = Partial<Record<string, string>>;

const defaultTheme: Record<string, string> = {
    '--primary-btn-color': '#7C3AED',
    '--secondary-btn-color': '#FFFFFF',
    '--hover-btn-color': '#6D28D9',
    '--bg-color': '#fff',

    '--corners-standard': '0.65em',
    '--corners-round': '3em',
    '--corners-square': '0',
};

export function applyTheme(
    settings: ThemeSettings = {},
    target: HTMLElement = document.documentElement
) {
    const merged = { ...defaultTheme, ...settings };

    for (const key in merged) {
        target.style.setProperty(key, merged[key]);
    }
}
