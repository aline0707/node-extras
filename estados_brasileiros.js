const fs = require('fs');

// 1. Array com todos os estados brasileiros, códigos (IBGE) e siglas
const estadosBrasileiros = [
    "11 - Rondônia - RO",
    "12 - Acre - AC",
    "13 - Amazonas - AM",
    "14 - Roraima - RR",
    "15 - Pará - PA",
    "16 - Amapá - AP",
    "17 - Tocantins - TO",
    "21 - Maranhão - MA",
    "22 - Piauí - PI",
    "23 - Ceará - CE",
    "24 - Rio Grande do Norte - RN",
    "25 - Paraíba - PB",
    "26 - Pernambuco - PE",
    "27 - Alagoas - AL",
    "28 - Sergipe - SE",
    "29 - Bahia - BA",
    "31 - Minas Gerais - MG",
    "32 - Espírito Santo - ES",
    "33 - Rio de Janeiro - RJ",
    "35 - São Paulo - SP",
    "41 - Paraná - PR",
    "42 - Santa Catarina - SC",
    "43 - Rio Grande do Sul - RS",
    "50 - Mato Grosso do Sul - MS",
    "51 - Mato Grosso - MT",
    "52 - Goiás - GO",
    "53 - Distrito Federal - DF"
];

// 2. Transforma o array em uma única string, separando cada item por uma nova linha (\n)
const conteudo = estadosBrasileiros.join('\n');

// 3. Grava os dados no arquivo 'estados.txt'
fs.writeFile('estados.txt', conteudo, (err) => {
    if (err) {
        console.log("Algo deu errado")
        return
    }
    console.log('deu certo')
});