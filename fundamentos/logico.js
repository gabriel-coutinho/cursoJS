/*
    Se eu realizar os dois trabalhos dessa semana vou no shopping comprar uma tv de 50 polegadas e tomar sorvete
    Se apenas um der certo vou no shopping comprar uma tv de 32 polegadas e tomar sorvete
    Se eu não tomar sorvete estou sendo saudavel
*/
function compras(trabalho1, trabalho2) {
    const tomarSorvete = trabalho1 || trabalho2 // com uma | só transforma em binario e compara bit a bit
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // Existe um xor, mas comparando bit a bit
    const comprarTv32 = trabalho1 != trabalho2 // Diferente consegue simular o xor
    const serSaudavel = !tomarSorvete

    // A partir de 2015, num return, não eh preciso colocar o nome do atributo no obj, apenas o valor
    // Essa atribuição eh feita dinamicamente
    return { tomarSorvete, comprarTv50, comprarTv32, serSaudavel}
}

console.log(compras(false, false)) // true: serSaudavel
console.log(compras(false, true)) // true: tomarSorvete, comprarTv32
console.log(compras(true, false)) // true: tomarSorvete, comprarTv32
console.log(compras(true, true)) // true: tomarSorvete, comprarTv50