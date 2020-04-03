// O let, diferente do var, também possui o escopo em bloco, além do global e em função
var numero = 3
{
    let numero = 4
    console.log("Dentro = ", numero) // 4
}

console.log("Fora = ", numero) // 3

// Se a variavel estiver instanciada no bloco tem precedencia, se não é usada a global normalmente
let palavra = 'Amor' // escopo global
{
    let palavra = 'Ódio' // Se não existisse essa linha e a 15 seria logado Amor
    {
        let palavra = 'Filho' // Se não tivesse essa linha seria logado Ódio
        console.log(palavra) // Nesse formato Filho
    }
}