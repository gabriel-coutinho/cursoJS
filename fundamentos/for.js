// Com var exp 1
for(var i = 0; i < 10; i++) {
    console.log(i)
}

console.log("i = ", i)

// Com let exp 1
for(let i = 0; i < 10; i++) {
    console.log(i)
}

//console.log("i = ", i) // Erro!

//Com var exp 2
const funcs = []
for(var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

// Mesmo na hora que adiciono ao array o i tendo o valor certo, quando salvo, de qualquer posição imprime o último.
funcs[2]() // imprime 10
funcs[8]() // imprime 10

// Com let exp 2
funcs1 = []
for(let j = 0; j < 10; j++) {
    funcs1.push(function() {
        console.log(j)
    })
}

// No caso do let ele salva na função o valor exato do i naquele momento, não acessa o valor de i atual.
funcs1[2]() // Imprime 2
funcs1[8]() // Imprime 8