let contador = 0
function mensagem() {
    contador++
    console.log(contador)
    console.log("agendado")
    if (contador === 5) {
        clearInterval(intervalo)
    }
}

const intervalo = setInterval(function() {
    mensagem()
}, 1000)
