let valor // nao inicializada
console.log(valor) // undefined

valor = null // ausencia de valor e nao aponta para nada na memoria
console.log(valor) // null
// Padrão deixar o undefined para o JS e quando quiser deixar algo sem valor e end usar null
//console.log(valor.toString()) // Erro!

const prod = {}
console.log(prod.preco) // undefined. Como prod está definido, ele retorna undefined pois apenas o atributo preco nao foi definido
//console.log(prod.preco.a) // Erro! nao pode acessar um atributo de algo nao definido
console.log(prod) // {}

prod.preco = 3.75
console.log(prod) // preco = 3.75

prod.preco = undefined // Evitar setar explicidamente valores undefined
console.log(!!prod.preco) // false
console.log(prod) // preco = undefined
delete prod.preco // Apaga o atributo inteiro
console.log(prod) // {}

prod.preco = null
console.log(!!prod.preco) // false
console.log(prod)