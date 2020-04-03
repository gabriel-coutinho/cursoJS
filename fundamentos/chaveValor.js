// par chave/valor
const saudacao = "Opaa" // Contexto léxico 1

function exec() {
    const saudacao = "Falaaa" // contexto lexico 2
    return saudacao
}

// Objetos são grupos aninhados de chave/valor
const Client = {
    nome: 'Marcio',
    idade: 24,
    endereco: {
        tipo: "casa",
        logradouro: 'Rua da luz',
        numero: 45
    }
}

console.log(saudacao)
console.log(exec())
console.log(Client)