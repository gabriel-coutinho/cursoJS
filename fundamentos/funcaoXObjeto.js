console.log(typeof Object) // Function como quase tudo eh uma funcao
console.log(typeof new Object) // Object. Em JS voce pode instanciar função, nesse caso pode ter () ou não

// Eh possivel instanciar funcoes que vc criou também
const func = function() {}
console.log(typeof func) // Eh uma funcao
console.log(typeof new func) // Object. Como no exemplo anterior

// Também eh possivel instanciar objetos através de classes, mas classes, por baixo, são funções
class Amor {}
console.log(typeof Amor) // Eh uma funcao
console.log(typeof new Amor()) // Eh um objeto criado a partir da classe/função, pode ter () ou não

