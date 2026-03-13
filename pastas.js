const fs = require('fs')

let pasta = 'fotos'

console.log("\n\n===== verificando pasta =====")
if (fs.existsSync(pasta)) {
    console.log('Tudo certo')
} else {
    console.log('Ops! A pasta não existe')
}

console.log("\n\n===== criando pasta =====")
pasta = 'icones'
if (!fs.existsSync(pasta)) {
    fs.mkdirSync(pasta)
    console.log('Pasta criada com sucesso!')
} else {
    console.log('A pasta já existe')
}

console.log("\n\n===== criando uma pasta dentro da outra =====")
let pastas = 'icones/redes-sociais/ilustraçoes'
if (!fs.existsSync(pastas)) {
    fs.mkdirSync(pastas, { recursive: true }        )
    console.log('Pasta criada com sucesso!')
} else {
    console.log('A pasta já existe')
}

console.log("\n\n===== listando conteúdo da pasta =====")
pasta = 'icones'
console.log(fs.readdirSync(pasta))

console.log("\n\n===== renomeando pasta =====")
pasta = 'icones'
try {
    fs.renameSync(pasta, 'icons')
    console.log('Pasta renomeada com sucesso!')
} catch (erro) {
    console.error("não foi renomeado")
}

// console.log("\n\n===== deletando pasta =====")
// pasta = 'icons' 
// try {    fs.rmdirSync(pasta, { recursive: true })
//     console.log('Pasta deletada com sucesso!')
// } catch (erro) {
//     console.error("não foi deletada")
// }    
console.log("\n\n===== deletando pasta =====")
const fsextra = require('fs-extra')

const folder = 'icones'
fsextra.remove(folder, erro => {
        console.error(erro)
})
