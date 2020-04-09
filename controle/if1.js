function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com', nota)
    }
}

soBoaNoticia(8.1) // Aprovado com 8.1
soBoaNoticia(6.9) // Nada

function soFaloVerdade(valor) {
    if(valor) {
        console.log('É verdade...', valor)
    }
}

soFaloVerdade() // Nada. Com nada eh passado undefined que tem valor falso
soFaloVerdade(null) // Nada. null tem valor false
soFaloVerdade(undefined) // Nada. undefined tem valor false
soFaloVerdade(NaN) // Nada. NaN tem valor false
soFaloVerdade('') // Nada. string vaiza tem valor false
soFaloVerdade(0) // Nada. 0 eh o unico numero inteiro com valor false
soFaloVerdade(-1) // É verdade... -1. Todos os inteiros, exceto o 0, são true
soFaloVerdade(' ') // É verdade...  . String preenchida com qualquer valor diferente de '' eh true
soFaloVerdade('?') // É verdade... ?. String preenchida com qualquer valor diferente de '' eh true
soFaloVerdade([]) // É verdade... []. Array, mesmo vazio retorna true
soFaloVerdade([1, 2]) // É verdade... [ 1, 2 ]. Array, mesmo vazio retorna true
soFaloVerdade({}) // É verdade... {}. Assim como o array, objetos, mesmo vazios, são true