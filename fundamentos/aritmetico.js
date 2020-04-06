// São operadores binarios, sempre resolve dois operandos por vez
const [a, b, c, d] = [3, 4, 28, 12]

// Resolve a + b, depois esse resultado mais c e por ai vai
const soma = a + b + c + d
const subtracao = c - d
const multiplicacao = a * b
const divisao = c / b
const modulo = a % 2

// prefix ++a
// postfix a++

console.log(soma, subtracao, multiplicacao, divisao, modulo) // 47 16 12 7 1