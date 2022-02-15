// Получаем имя папки проекта
import * as nodePath from 'path'; 
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './app/build'; /* Путь до папки с конечным результатом */
const srcFolder = './app/src'; /* Путь до папки с исходными файлами */

export const path = {
    // Обьект путей с результатом
    build: {
        html: `${buildFolder}/`,
        style: `${buildFolder}/style`,
        images: `${buildFolder}/images/`,
        js: `${buildFolder}/script/`,
        fonts: `${buildFolder}/fonts/`
    },
    // Обьект путей с исходным файлом
    src: {
        html: `${srcFolder}/*.pug`, // * - Это маска, для получения файлов с любым значением.
        style: `${srcFolder}/style/style.scss`,
        images: `${srcFolder}/images/**/*.{jpg,png,jpng,gif,webp}`,
        js: `${srcFolder}/script/app.js`,
        fonts: `${srcFolder}/fonts/*.{ttf,otf}`
    },
    // Обьект путей к файлам и папкам за которыми нужно следить
    watch: {
        html: `${srcFolder}/**/*.pug`,
        style: `${srcFolder}/style/**/*.scss`,
        images: `${srcFolder}/images/**/*.{jpg,png,jpng,gif,webp}`,
        js: `${srcFolder}/script/**/*.js`
    },
    clean: buildFolder,
    buildFolder,
    srcFolder,
    rootFolder,   
}