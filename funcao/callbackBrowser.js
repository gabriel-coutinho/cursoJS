// Um exemplo de callback no browser

// Nesse exemplo o param evento não é usado, mas na maioria das ocasiões ele é, por isso passei como param
const logaAoClicar = evento => console.log("O evento ocorreu!!")

document.getElementsByTagName('body')[0].onclick = logaAoClicar