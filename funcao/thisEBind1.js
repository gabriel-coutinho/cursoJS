const pessoa = {
    saudacao: "Olá!",
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar() // Olá!
// Se mudarmos o contexto léxico o this também muda
const falarExterno = pessoa.falar
falarExterno() // undefined. Como a execução foi em outro contexto lexico o this não tem um atributo saudacao.

// Usando a função bind é possivel passar um contexto lexico fixo como parâmetro, ou seja, 
// não importa onde for executado o código o this sempre será pessoa
const falarExternoBind = pessoa.falar.bind(pessoa)
falarExternoBind() // Olá