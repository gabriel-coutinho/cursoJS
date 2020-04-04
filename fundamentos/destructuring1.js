// Funcao de desestruturação de objetos e arrays

const pessoa = {
    nome: 'Marcio da Silva',
    idade: 23,
    endereco: {
        logradouro: 'Rua da luz',
        numero: 200
    }
}

// Com o destructuring você trás para um contexto, atributos de outro contexto
// Agora vou trazer para a aplicação os atributos nome e idade do obj pessoa
// notação para obj { nome_variavel1, nome_variavel2 } = obj_inicial
const { nome, idade } = pessoa
console.log(nome, idade) // Marcio da Silva 23

// Eh possivel mudar o nome da variavel na hora da desestruturacao.
// notação para obj { nome_variavel1: novo_nome1, nome_variavel2: novo_nome2 } = obj_inicial
const { nome: n, idade: i } = pessoa
console.log(n, i) // Marcio da Silva 23

// Eh possivel extrair atributos não presentes no obj inicial, mas se não tiverem um valor default serão undefined
// Eh possivel colocar o valor default como na variavel bemHumorada
const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada) // undefined true
console.log(pessoa) // não modifica o objeto

// Ainda eh possivel tirar atributos de objetos dentro de objetos
// Nesse caso tirando logradouro e numero de endereco
// Isso nao faz endereco,por exemplo, aparecer apenas os atributos internos
// Também eh possivel tirar atributos que não existem, ficam undefined
const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep) // Rua da luz 200 undefined
// console.log(endereco) //Erro! endereco is not defined
//CUIDADO PARA NÃO TENTAR ACESSAR NADA DE UM UNDEFINED