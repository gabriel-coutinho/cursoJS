// Funções de callback são funções que são executadas toda vez que um evento ocorrer
const notas = [7.8, 6.9, 5.4, 8.3, 3.2, 9.0]

// Sem callback
let notasBaixas1 = []
for (let i in notas) {
    if(notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// Com callback

// Quando acontecer o evento de percorrer os elementos chame essa função
// Os elementos que o retorno da função callback for true, entram no array em questão
let notasBaixas2 = notas.filter(function (nota) { return nota < 7 }) // filter percorre todos os elementos e aplica a função callback em cada um
console.log(notasBaixas2)

// Ainda é possível usar arrow functions para modularizar isso
const notaMenorQue7 = nota => nota < 7
let notasBaixas3 = notas.filter(notaMenorQue7)
console.log(notasBaixas3)
// Nos três consoles, foram logados [ 6.9, 5.4, 3.2 ]