// Fazendo um while funcionando como um for
let contador = 0
while(contador <= 10) {
    // Com a notação prefixa ele imprime começando de 1 até 11
    // Já com a posfixa vai de 0 até 10
    console.log(`Contador: ${contador++}`)
}

// Sintaxe do for não mto diferente de outras linguagens
// Usar let na hora da atribuiçao
// for(atirbuicao; condiçao de parada; incremento) {}
for(let i = 0; i <= 10; i++) {
    console.log(`Iteração do for ${i}`)
}

// Da mesma forma que em outras linguagens também eh possivel percorrer indices de estruturas de dados
const notas = [5.3, 3.8, 9.7, 7.4, 8.6]
for(let i = 0; i < notas.length; i++) {
    console.log(`Nota ${i + 1}: ${notas[i]}`)
}