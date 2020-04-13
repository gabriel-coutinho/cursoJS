const pegaAleatorioEntre = (min, max) => Math.floor(valor = Math.random() * (max - min) + min)

let opcao = -1

// A estrutura do while funciona da mesma forma, porém a primeira execução ocorre antes do teste
// Sintaxe semelhante a Java tbm
do {
    opcao = pegaAleatorioEntre(-1, 10)
    console.log(`A opcao atual é: ${opcao}`)
} while(opcao != -1)

console.log('Finalizado!')