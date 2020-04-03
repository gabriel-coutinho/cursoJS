let isAtivo = false
console.log(isAtivo) // false

isAtivo = true
console.log(isAtivo) // true

console.log('Os verdadeiros...')
console.log(!!'bola') // !! pega o valor booleano de qualquer coisa
console.log(!!4) // Inteiros são true
console.log(!!' ') // Espaço é verdadeiro
console.log(!!Infinity) // true
console.log(!!(isAtivo = true)) // Se o resultado da atribuição for true, tbm retorna true
console.log(!![]) // Array vazio eh true
console.log(!![ '3' ])
console.log(!!{}) // Object vazio eh true

console.log(`
`)

console.log('Os falsos...')
console.log(!!0) // 0 eh o unico inteiro falso
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false)) // Se o resultado da atribuição for false, tbm retorna false

console.log(`
`)

console.log("Para finalizar...")
console.log(!!(null || '' || 0 || true)) // eh possivel combar booleans em um or (true)

// eh comum usar o or para dar valores default a variaveis pois retorna o primeiro true
// usa lazy function
let nome = ''
console.log(nome || 'Desconhecido') // Desconhecido
nome = 'Raiany'
console.log(nome || "Desconhecido") // Raiany

if(nome) console.log('Pegou')