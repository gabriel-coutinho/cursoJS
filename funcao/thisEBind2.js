// Outra forma de fixar o contexto léxico de uma execução é colocar o this dentro de uma constante e usar a constante, não o this
function Pessoa() {
    this.nome = 'Luis'
    this.idade = 0
    // Dessa forma o contexto léxico que self representa é sempre o de dentro da função pessoa
    const self = this
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }/*.bind(this) também resolve o problema*/, 1000) //A função é executada a cada 1000 milisegundos(1 segundo)
}

new Pessoa
// Sem nenhuma das formas de manter o contexto léxico acima, fica printando NaN pois a função
// setInterval tá sendo executada em outro contexto léxico
