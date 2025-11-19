
const settings = {
    /** Основные цвета интерфейса управления */
    primaryColor: '#201f26',
    secondaryColor: '#83efef',
    hoverColor: '#0C1128AD',
}

document.documentElement.style.setProperty('--primary-btn-color', settings.primaryColor);
document.documentElement.style.setProperty('--secondary-btn-color', settings.secondaryColor);
document.documentElement.style.setProperty('--hover-btn-color', settings.hoverColor);
