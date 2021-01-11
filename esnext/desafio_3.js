const fs = require("fs")
const { reject } = require("lodash")
const { resolve } = require("path")
const path = require("path")

const caminho = path.join(__dirname, "dados.txt")

const retorno = new Promise((resolve, reject) => {
    fs.readFile(caminho, (_, conteudo) => resolve(conteudo.toString()))
})

retorno.then(console.log)