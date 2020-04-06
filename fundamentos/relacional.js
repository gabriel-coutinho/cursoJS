// == igualdade, testa se o valor dos operandos eh igual
// === estritamente igual, testa se o valor e o tipo dos operandos eh igual
// != diferente, testa se o valor dos operandos eh diferente
// !== estritamente diferente, testa se o valor e o tipo dos operandos eh diferente

console.log('01)', '1' == 1) // true
console.log('02)', '1' === 1) // false
console.log('03)', '3' != 3) // false
console.log('04)', '3' !== 3) // true

console.log('05)', 3 > 2) // true
console.log('06)', 3 < 2) // false
console.log('07)', 3 >= 2) // true
console.log('08)', 3 <= 2) // false

// Para tipos não primarios ele sempre compara por endereco de memoria
const d1 = new Date(0)
const d2 = new Date(0)

console.log('09)', d1 == d2) // false
console.log('10)', d1 === d2) // false
console.log('11)', d1.getTime() === d2.getTime()) // true

// undefined tem o mesmo valor de null, porem sao de tipos diferentes
console.log('12)', undefined == null) // true
console.log('13)', undefined === null) // false