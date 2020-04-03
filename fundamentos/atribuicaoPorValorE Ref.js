// As atribuições, em tipos complexos, guardam endereços de memoria
const a = {name: "Amor"} // a guarda o endereço de memoria do objeto

const b = a; // b guarda o mesmo endereço de memoria que a guarda

console.log(a.name) // Amor
b.name = "Ódio" // então alterações no objeto de b, modificam o de a
console.log(a.name) // Ódio

// Para tipos primitivos as cópias são por valor

let c = "Amor"
// Copia o valor de c para d, não ref de memória
let d = c

console.log(c)
d = "Ódio"
console.log(c)
