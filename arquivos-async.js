const fs = require('fs')

let novoCliente = 'João da Silva\n'
fs.writeFile('clientes.txt', novoCliente, erro => {
    if (erro) {
        console.error(erro)
        return        
    }
    console.log("Novo cliente!")
})

fs.readFile('clientes.txt', 'utf-8', (erro, dados) => {
    if (erro) {
        console.error(erro)
        return        
    }
    console.log(dados)
})
console.log("Bem vindo")

novoCliente = 'Regina George'
fs.appendFile('clientes.txt', novoCliente, erro => {
    if (erro) {
        console.error(erro)
        return        
    }
    console.log("+1 cliente adicionado!")
})