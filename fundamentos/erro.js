function imprimeNomeGritado (obj) {
    console.log(obj.name.toUpperCase() + '!!!')
}

function imprimeNomeGritadoComTratamento (obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) {
        trataErro(e)
    } finally {
        // Opcional, executado dando erro ou não
        console.log('final')
    }
}

function trataErro (erro) {
    throw new Error('Aconteceu um problema')
}

const objErrado = { nome: 'gabriel' }
const objCerto = { name: 'gabriel' }
//imprimeNomeGritado(objErrado) // Loga o track de erro
imprimeNomeGritado(objCerto)

// imprimeNomeGritadoComTratamento(objErrado) // Error, aconteceu um problema
imprimeNomeGritadoComTratamento(objCerto)
