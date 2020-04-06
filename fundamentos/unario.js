let num1 = 1
let num2 = 2
const num3 = -3

// prefix
--num1
console.log(num1) // 0
// posfix
num1++
console.log(num1) // 1

// inverte o sinal, tanto pos quanto neg, não altera a variavel
console.log(-num3) // 3
console.log(num3) // -3

// O prefix tem alta precedencia eh executado antes das coisas
console.log(++num1 === num2--) // true
console.log(num1 === num2) // false