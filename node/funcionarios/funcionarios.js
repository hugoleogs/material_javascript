const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const encontrarMulher = (arr) => arr.filter(x => x.genero == 'F')
const encontrarPais = (arr) => arr.filter(x => x.pais == 'China')
const menorSalario = (arr) => arr.reduce((menorS, salarioP) => menorS.salario >= salarioP.salario ? salarioP: menorS)

axios.get(url).then(response => {
    const funcionario = response.data
    console.log(menorSalario(encontrarPais(encontrarMulher(funcionario))))
})

/*

Pegar a Mulher chinesa com o menor salario! 

*/