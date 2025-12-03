/** Конфиг базовых стилей проекта */

const settings = {
    /** Основные цвета интерфейса управления */
    '--primary-btn-color': '#201f26',
    '--secondary-btn-color': '#83efef',
    '--hover-btn-color': '#b45aba',
    '--bg-color': '#fff',

    /** Углы */
    '--corners-standard': '0.65em',
    '--corners-round': '3em',
    '--corners-square': '0',
}

for(let key in settings) {
    document.documentElement.style.setProperty(key, settings[key]);
}

