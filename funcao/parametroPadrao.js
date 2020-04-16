// Parâmetro padrão usando ||
function soma(a, b, c) {
    // Se o valor de a for considerado false(null, undefined, 0...) o valor da variável fica 1
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

// Tomar cuidado ao trabalhar com inteiros, pois 0 eh considerado falso e nessa lógica a variável assume o valor 1
console.log(soma(), soma(3), soma(1, 2, 3), soma(0, 0, 0)) // 3 5 6 3

function soma1(a, b, c) {
    a = a !== undefined ? a : 1 // Se o parâmmetro recebido for undefined padrão ser 1, colocando != também serve para null
    b = 1 in arguments ? b : 1 // Se existir um parâmetro no indice 1 usar o valor. Para c, seria no indice 2 e por ai vai
    c = isNaN(c) ? 1 : c // Se c é um NaN, tem seu valor padrão 1
    return a + b + c
}

// Nesse caso a comparação é se o valor é um Number, então a última execução funciona
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)) // 3 5 6 0

// A forma mais atual é colocar na hora dos parêmtros um valor default
const soma2 = (a = 1, b = 1, c = 1 ) => a + b + c

// Nesse caso também funciona corretamente e o código é bem mais intuitivo
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)) // 3 5 6 0