// Toda função tem um array de argumentos(arguments) que lhe são passados
function soma() {
    // Se esse valor inicial for uma string('') todas as somas, mesmo sé de numeros, viram concatenações
    let soma = 0
    for(i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma(3, 2)) // 5
console.log(soma(1.2, 3.2, 4.6)) // 9
console.log(soma()) // 0. Pois foi o valor inicializado na função e nesse caso não entrou no for

// Também possível com outros tipos
console.log(soma('a', 'b', 'c')) // 0abc. 0(valor inicial da variavel na função), params 1, 2 e 3
console.log(soma(12, 3, 4.5, 'Amor', 6)) // 19.5Amor6. Vai somando até chegar na string, a partir dai concatena