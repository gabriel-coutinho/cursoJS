// Closure é o escopo criado quando uma função é declarada
// Esse escopo premite a função acessar e manipular as variaveis externas a função

// Contexto léxico em ação!

const valor = 'Global'

function fora() {
    const valor = 'Local'
    // Uma função tem acesso ao escopo onde ela é fisicamente declarada
    // Nesse caso a funcao dentro, tem acesso a tudo que está no contexto lexico da funçao fora,
    // Onde ela foi escrita
    function dentro() {
        return valor
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao()) // Local