function getRandomEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// O while funciona da mesma forma que em outras linguagens como Java
let opcao = 0

// Imprime valores entre -1 e 10, até o aleatório ser -1
while(opcao != -1) {
    opcao = getRandomEntre(-1, 10)
    console.log(`A opcao atual é: ${opcao}`)
}

console.log('Finalizado!')