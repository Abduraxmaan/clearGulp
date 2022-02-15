
export const server = (done) => {
    app.plugins.browserSync.init({
        server: {
            baseDir: `${app.path.build.html}` /* Базовая папка откуда нужно запустить файл */
        },
        
        notify: false, /* Сообщение в браузере */
        port: 300 
    })
}