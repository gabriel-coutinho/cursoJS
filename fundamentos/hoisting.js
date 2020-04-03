// Em JS as variaveis instanciadas com var sofrem hoisting
// Sua declaração, mesmo sem valor atribuido, é içada para o começo da execução

console.log("a = ", a)
var a = 2
console.log("a = ", a)

// Com let e const da erro
//console.log("b = ", b) Erro!
const b = 4