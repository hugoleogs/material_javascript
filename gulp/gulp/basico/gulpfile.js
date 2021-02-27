const gulp = require('gulp')
const {series, parallel} = require('gulp')

function antes1(bc){

    console.log("Tarefa Antes 1!!")

return bc()
}

function Antes2(bc){

    console.log("Tarefa Antes 2!!")

return bc()
}

function copiar(bc){
    //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    gulp.src('pastaA/**/*.txt')
        .pipe(gulp.dest('pastaB'))
    console.log("Tarefa copiar!!")

    return bc()
}

function fim(bc){

    console.log("Tarefa FIM!!")

return bc()
}

module.exports.default = series(
    parallel(antes1, Antes2),
    copiar,
    fim
    )