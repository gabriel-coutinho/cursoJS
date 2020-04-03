// Funcao sem retorno
function imprimeSoma(a, b) {
    console.log(a + b)
}

imprimeSoma(2, 3) // 5
imprimeSoma(2) // NaN, faz a soma de a = 2 e b = undefined
imprimeSoma(2, 4, 5, 80, 'gabos', null) // 6, usa o a e b, ignora o resto
imprimeSoma() // NaN, faz a soma de a = undefined e b = undefined

// Funcao com retorno
function soma(a, b = 1) { // A partir do ES2015 pode colocar valor default nas variaveis para quando não for passado parametro
    return a + b
}

console.log(soma(2, 3)) // 5
console.log(soma(2)) // 3, por não ter valor b assume o 1 default
console.log(soma()) // NaN, faz a soma de a = undefined e b = 1(default)