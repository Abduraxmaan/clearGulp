import plumber from 'gulp-plumber'; /* Обработка ошибок */
import notify from 'gulp-notify'; /* Вывод сообщений */
import browserSync from 'browser-sync'; /* Этот плагин для открытия браузера и перезагрузки */


// Экспорт обьекта
export const plugins = {
    plumber,
    notify,
    browserSync
}