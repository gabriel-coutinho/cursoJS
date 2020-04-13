// O for in retorna pode ser usado tanto em array quanto em objeto
// for(variavel in array/objeto)
// Lembrar de usar let para limitar o escopo da variavel i para dentro do laço

// Para array
const notas = [5.3, 3.8, 9.7, 7.4, 8.6]

// O i itera sobre cada um dos indices do array
for(let i in notas) {
    console.log(`Nota pos ${i} = ${notas[i]}`) // i vai de 0 a 4
}

// Para objeto
const pessoa = {
    nome: 'Thaynnara',
    sobrenome: 'Raiany',
    idade: 23,
    peso: 45,
}

// Para objeto, em cada iteração a variavel recebe o nome de um atributo do objeto
for(atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`) // Primeiro atributo recebe nome, depois sobrenome e assim por diante
}