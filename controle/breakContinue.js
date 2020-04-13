// Um arquivo apenas para conhecimento
// O break só tem funcionalidade sobre blocos switch, for e while
// O contine só tem funcionalidade sobre for e while

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// break
for(i in array) {
    // O break para a execução do laço
    if(i == 5) {
        break
    }
    // Loga indices de 0 a 4
    console.log(`${i} = ${array[i]}`) // Nada após o i == 4 eh logado
}

// continue
for(i in array) {
    // O continue para a iteração e segue para a próxima, por isso só faz sentido em laços
    if(i == 5) {
        continue
    }
    // Loga os indices com exceção do 5
    console.log(`${i} = ${array[i]}`) // Quando i == 5 a iteração eh abortada antes de logar, mas apenas i == 5
}

// É possivel colocar rotulos em laços para executar o break em um laço mais externo
// Código muito complexo e com legibilidade ruim
// Possível de fazer, mas é muito difícil não existir uma solução melhor
externo: for(a in array) {
    for(b in array) {
        if (a == 2 && b == 3) {
            break externo
        }
        console.log(`Par = (${a}, ${b})`)
    }
}