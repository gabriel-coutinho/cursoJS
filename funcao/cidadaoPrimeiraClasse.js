// Em JS function eh First-Class Object (Citizens)
// High-Order function

// Criar de forma literal
function f1() {}

// Armazenar em uma variável
const f2 = function () {}

// Armazenar em um array
const array = [function (a, b) {return a + b}, f1,f2]
console.log(array[0](2, 3)) // 5

// Armazenar em atributos de objetos
const pessoa = {}
pessoa.falar = function () { console.log("Olá!") }
pessoa.falar() // Olá!

// Passar como parametro para função
function run(func) {
    func()
}
run(function () { console.log('Love wins!') }) // Love wins!

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        //return a + b + c
        console.log(a + b + c)
    }
}

// Na hora da chamada vê-se que soma retorna uma função 
// Ao colocar o segundo parênteses eh passado param para essa func
// console.log(soma(2, 3)(6))
soma(2, 3)(6) // 11

// Tambem é possivel armazenar o retorno da primeira função em uma variavel
const cincoMais = soma(2, 3)
cincoMais(5) //  10