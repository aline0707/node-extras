const os = require('os')
console.log("Calcule e mostre em gb quanto de memória tem livre.")
console.log("Memória livre: " + (os.freemem() / (1024 * 1024 * 1024)).toFixed(2) + " GB")
console.log("Memória total: " + (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2) + " GB")

console.log("Calcule e mostre em gb quanto de memória tem total.") 
console.log(os.totalmem())

console.log("Calcule e mostre em minutos e em horas quanto tempo o computador está ligado.")
console.log("Tempo de atividade: " + Math.floor(os.uptime() / 60) + " minutos") 
console.log("Tempo de atividade: " + Math.floor(os.uptime() / 3600) + " horas") 

// console.log(" Registre as seguintes informações em um arquivo de texto chamado Registro_xxxx.txt a onde xxxx deve ser o nome do host. As informações a serem registradas são: o nome do host, o tipo do sistema operacional, a arquitetura do processador, a quantidade de memória total e a quantidade de memória livre.")
// const fs = require('fs')
// const dados = fs.writeFileSync('clientes.txt', novoCliente)
// const hostName = os.hostname()
// const systemType = os.type()
// const processorArch = os.arch()
// const totalMemory = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2) + " GB"
// const freeMemory = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2) + " GB"
const os = require('os')

// 1. Coletando as informações
const hostName = os.hostname()
const systemType = os.type()
const processorArch = os.arch()

// Convertendo memória de bytes para GB (opcional, mas fica melhor de ler)
const totalMemory = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2) + " GB"
const freeMemory = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2) + " GB"

const fs = require('fs')

// 2. Definindo o nome do arquivo dinamicamente (Registro_xxxx.txt)
const nomeArquivo = `Registro_${hostName}.txt`

// 3. Montando o conteúdo que será gravado
const conteudo = `
Informações do Sistema:
-----------------------
Nome do Host: ${hostName}
SO: ${systemType}
Arquitetura: ${processorArch}
Memória Total: ${totalMemory}
Memória Livre: ${freeMemory}
`;

// 4. Gravando o arquivo
try {
    fs.writeFileSync(nomeArquivo, conteudo);
    console.log(`Arquivo ${nomeArquivo} criado com sucesso!`);
} catch (err) {
    console.error("Erro ao criar o arquivo:", err);
}