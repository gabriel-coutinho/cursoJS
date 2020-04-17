// Funções anônimas em ES podem ser armazenadas em variaveis, passadas como parâmetro 
// e até mesmo estar dentro de um objeto
// Colocando em variáveis
const soma = function (a, b) {
    return a + b
}

const imprimeResultado= function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

// Chamando a variável
imprimeResultado(2, 3) // 5
imprimeResultado(2, 3, soma) // 5. iguais
// É possível passar como parâmetro
imprimeResultado(2, 3, function(a, b) {
    return a - b
}) // -1
// Arrow function sempre é anônima
imprimeResultado(2, 3, (a, b) => a * b) // 6

// Uma função anônima também pode fazer parte de um objeto
const pessoa = {
    falar: function() {console.log('Olá!')}
}

pessoa.falar()