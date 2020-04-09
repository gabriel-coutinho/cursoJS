// função retorna se uma nota está entre dois valores

const entre = (nota, min, max) => nota >= min && nota <= max

// Sintaxe normal a outras linguagens como Java
// Cuidado com tratamento de erros pois é possivel comparar uma string por exemplo com o numero 7
// Não apenas o if, mas os blocos else if e else, quando só possui uma sentença, também pode ficar sem {}
const imprimeResultado = nota => {
    if(entre(nota, 9, 10)) {
        console.log('Quadro de Honra!')
    } else if(entre(nota, 7, 8.99)) {
        console.log('Aprovado!')
    } else if(entre(nota, 4, 6.99)) {
        console.log('Recuperação!')
    } else if(entre(nota, 0, 3.99)) {
        console.log('Reprovado!')
    } else {
        console.log('Nota inválida')
    }
}

imprimeResultado(3) // Reprovado!
imprimeResultado(6) // Recuperação!
imprimeResultado(8) // Aprovado!
imprimeResultado(10) // Quadro de Honra!
imprimeResultado(11) // Nota inválida!
imprimeResultado(-1) // Nota inválida
imprimeResultado('Amor') // Nota inválida Faz a comparação e retorna o valor do else, sem nenhum aviso