/** Конфиг базовых стилей проекта */

const settings = {
    /** Основные цвета интерфейса управления */
    '--primary-btn-color': '#7C3AED',
    '--secondary-btn-color': '#FFFFFF',
    '--hover-btn-color': '#6D28D9',
    '--bg-color': '#fff',

    /** Углы */
    '--corners-standard': '0.65em',
    '--corners-round': '3em',
    '--corners-square': '0',
}

for(let key in settings) {
    document.documentElement.style.setProperty(key, settings[key]);
}

