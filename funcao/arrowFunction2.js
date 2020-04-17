// Em uma arrow function this é sempre o contexto léxico onde a função foi escrita, não muda nem com o bind
function comparaComThis(param) {
    console.log(this === param)
}

// Em uma function normal o this é o contexto léxico onde ela é chamada
comparaComThis(global) // true

// Porém é possível alterar o seu contexto léxico
const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // false, pois agora o contexto léxico está fixo em obj
comparaComThis(obj) // true

let comparaComThisArrow = param => console.log(this === param)
// Para arrow functions mesmo tentando forçar a mudança de contexto ele permanece o local onde a função foi escrita
comparaComThisArrow(global) // false
comparaComThisArrow(module.exports) // true. o contexto léxico onde a função foi escrita

// Tentando mudar o this com bind
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // false. O contexto léxico não muda
comparaComThisArrow(module.exports) // true. continua sem mudar