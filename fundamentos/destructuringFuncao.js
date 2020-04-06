// Em OBJ
/* Nos parâmetros da função eu posso usar destructuring num obj para acessar os valores dos 
 atributos diretamente na funcao */
function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// Na hora de ser passado o param eh um objeto
const obj = { max: 10, min: 4}
console.log(rand(obj))
// Pode ser instanciado previamente ou não
console.log(rand({ min: 850 })) // Como não atribui valor para o max, usa o default 1000
console.log(rand({})) // Como não atribui valor para nenhum dos dois parametros, os dois recebem os defaults 0 e 1000
// console.log(rand()) // Da erro!, estou tentando usar destructuring em um undefined, pois quando não passo parâmetro eh undefined

// Em array
function randA([min = 0, max = 1000]) {
    // Eh possivel inverter valores usando destructuring
    // Para esse exemplo se o primeiro valor for maior que o segundo inverter eles, para o max ser maior que o min
    if (min > max) [max, min] = [min, max]
    const valor = Math.random * (max - min) + min
    return Math.floor(valor)
}

// As formas de chamar são semelhantes mas como array não possuem um nome de variavel, eh passado so o array
console.log(randA([90, 50])) // Faz o swap max = 90 min = 50
console.log(randA([600])) // Default max, min = 600
console.log(randA([, 10])) // Default min, max = 10
console.log(randA([])) // Defaults min e max
// console.log(randA()) // Erro!