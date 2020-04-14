function area(altura, largura) {
    const area = altura * largura
    if(area >= 20) {
        console.log(`Área maior que a permitida: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2, 2)) // 4

// Eh possivel passar menos valores do que os definidos na assinatura da função
console.log(area(2)) // NaN. Para esse caso, altura = 2 e largura = undefined. 2 * undefined = NaN

// Da mesma forma, pode-se não passar nenhum param
console.log(area()) // NaN. Para esse caso, altura = undefined e largura = undefined. undefined * undefined = NaN

// Também é possível passar mais valores
console.log(area(2, 3, 17, 8, 9, 37)) // 6. Captura os parametros definidos na função e ignora o resto

// Também eh possivel não ter nenhum retorno
console.log(area(5, 5)) // Como entrou no if, vai logar a mensagem e retornar undefined
// undefined também eh logado, só que na linha acima