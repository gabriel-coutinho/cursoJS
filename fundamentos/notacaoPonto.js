// Serve para acessar atributos de uma funcao e de objetos
console.log(Math.ceil(6.1))

const obj1 = {}
function Obj(nome) {
    // usando this e a notação ponto torna o atributo visível e usavel para as instancias da função
    this.nome = nome
    this.exec = () => console.log(12)
}

const obj2 = new Obj("Nome")
// É possivel criar atributos dinamicamente usando a notação ponto
obj2.idade = 23
const obj3 = new Obj("Luciano")
const obj4 = {...obj2, altura: 1.70}

console.log(obj2)
console.log(obj3)
console.log(obj4)
obj3.exec()