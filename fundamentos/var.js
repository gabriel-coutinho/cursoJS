// var so tem dois escopos.

// Tudo que não está numa função é global

{
    {
        {
            {
                {
                    {
                        var testando = "Testando"
                    }
                }
            }
        }
    }
}

console.log(testando) // está no escopo global, pode ser acessado
testando = "Bola" // e modificado...
console.log(testando) // uma variavel global deve ter cuidados com possiveis efeitos colaterais ao ser setada

// Escopo local que para o caso de var é dentro de uma function
const funcao = () => {
    var local = "Local"
}

funcao()
//console.log(local) // Erro!

// Um exemplo de possiveis problemas
var numero = 3
{
    var numero = 4
    console.log(`Dentro = ${numero}`) // 4
}

console.log(`Fora = ${numero}`) // 4 também, pois estão no mesmo escopo
