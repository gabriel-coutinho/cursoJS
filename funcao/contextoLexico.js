const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec () {
    const valor = 'Local'
    // Uma função carrega consigo o contexto léxico de onde ela foi escrita
    minhaFuncao() // Vai pegar do contexto léxico onde a função foi escrita, ou seja loga Global
}

exec() // Global