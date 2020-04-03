const nome = 'Rafinha'
const concatenacao = nome + ' cococo'
// Considera tabulações, quebra de linha, tudo...
const template = `
    ${nome} 
    cococo`

console.log(typeof template) // String
console.log(template.length) // considera o \n e espaços das tabulações (24)
console.log(concatenacao, template)

// Expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
// O ${} é interpretado como um código JS.
console.log(` Amo ${up(concatenacao)}`)