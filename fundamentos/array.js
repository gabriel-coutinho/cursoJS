const array = [12.3, 3.4, 1.2, 7.8]

console.log(array[0], array[3]) // 12.3 7.8
console.log(array[4]) // undefined

array[4] = 8.9

console.log(array)
console.log(array.length)

array.push({id: 3}, null, "Amor", NaN, true) // arrays aceitam tipos variados
console.log(array)

console.log(array.pop()) // remove o ultimo retornando (nao coloca empty item)
delete array[1]
console.log(array)

array.push(12.4)
console.log(array)

array[20] = undefined // mesmo undefined, completa os campos vazios até o 20 com empty items
console.log(array)