// NUMBER

const peso1 = 1.0
const peso2 = 2.0

console.log(peso1, peso2)
// testar se a variavel eh do tipo integer
console.log(Number.isInteger(peso1)) // true
console.log(Number.isInteger(peso2)) // true

const avaliacao1 = 9.8673612
const avaliacao2 = 7.3821983

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(4)) // numero casas decimais, faz arredondamento
console.log(media.toString()) // transforma em string
console.log(media.toString(2)) // binário
console.log(typeof media) // não muda o tipo original
console.log(typeof Number) // function

// curiosidade
console.log(7 / 0) // Infinity
console.log("10" / 2) // 5
console.log(typeof ("10" / 2)) // Number
console.log("Top" * 2) // NaN (not a number)
console.log(0.1 + 0.7) // 0.7999999... (arredondamento não preciso)
//console.log(10.toFixed(2)) // ERROR
console.log((10).toFixed(2)) // entre parenteses funciona (feio)

// USANDO MATH
const raio = 7.8
const area = Math.PI * Math.pow(raio, 2)

console.log(area.toFixed(2)) // 191.13
console.log(typeof Math) // Object