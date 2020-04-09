// Sintaxe semelhante a outras linguagens
// Não aceita intervalos e exp relacionais nas condições dos cases
// Sempre no fim de um case colocar break pq ao entrar em um ele executa todos os abaixo!!!
// A sintaxe (case X: case Y: ação) funciona como um OR, açao executa tando para X quanto para Y
const imprimeResultado = nota => {
    switch(Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de honra!')
            break
        // Pode ser usado na mesma linha também
        case 8: case 7:
            console.log('Aprovado!')
            break
        case 6: case 5: case 4:
            console.log('Recuperação!')
            break
        case 3: case 2: case 1:
            console.log('Reprovado!')
            break
        default:
            console.log('Nota inválida!')
    }
}

imprimeResultado(10) // Quadro de honra!
imprimeResultado(7.5) // Aprovado!
imprimeResultado(6.99) // Recuperação!
imprimeResultado(3) // Reprovado!
imprimeResultado(-1) // Nota inválida!
imprimeResultado(11) // Nota inválida!
imprimeResultado('Amor') // Nota inválida!