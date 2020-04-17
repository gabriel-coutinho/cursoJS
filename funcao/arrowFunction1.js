// Dentro de uma arrow function o this permanece o contexto léxico do local onde a função foi escrita
// Mesmo exemplo do thisEBind2, só que usando arrow function
function Pessoa () {
    this.idade = 0

    setInterval(() => console.log(this.idade++), 1000)
}

new Pessoa()