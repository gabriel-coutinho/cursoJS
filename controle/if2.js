// Um if pode não possui {} para delimitar o bloco
// Nesse caso a condição serve apenas para a próxima sentença de código
// Independente de identação ou qualquer coisa

function test1(num) {
    if (num > 7)
        console.log(num)
        // Tudo a partir daqui não pertence a estrutura if, ou seja, independente do valor de num, vai ser executado
        console.log('Final')
}

test1(8) // 8 e depois final
test1(6) // final

// O ';' conta como uma sentença de código, então melhor não usar com as estruturas de controle
function test2(num) {
    if (num > 7); {
        // Como apos o if tem um ';' e não está num bloco, a estrutura condiciona apenas essa sentença de código.
        // Num ser logado no console indifere do seu valor ser > 7.
        console.log(num)
    }
}

test2(6) // 6
test2(8) // 8