const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono....

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)


// assincrono

fs.readFile(caminho, 'utf-8', (err, conteudo2) => console.log(`${JSON.parse(conteudo2).db.host}:${JSON.parse(conteudo2).db.port}`))

// Outra forma

const config = require('./arquivo.json')
console.log(config.db)
