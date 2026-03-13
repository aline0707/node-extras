const fs = require('fs')

let novoCliente = 'Juca Bala\n'
try {
    const dados = fs.writeFileSync('clientes.txt', novoCliente)
    console.log("Novo cliente!")
} catch (erro) {
    console.error("Erro Aqui::::::: ", erro)
}

const dados = fs.readFileSync('clientes.txt', 'utf-8')
console.log(dados)
console.log("Bem vindo")

novoCliente = 'Zé Rico'
try {
    const dados = fs.appendFileSync('clientes.txt', novoCliente)
    console.log("+1 cliente adicionado!")
} catch (erro) {
    console.error("Erro Aqui::::::: ", + erro)
}   