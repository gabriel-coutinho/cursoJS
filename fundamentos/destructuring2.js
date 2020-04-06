// Pode se fazer uma atribuição usando [], se tratando de array
const [a] = [10]
console.log(a) // 10

// Eh possivel fazer multiplas atribuições, assim como eh possivel pular alguns indices colocando um espaço no meio
const [n1, , n3, , n5, n6 = 0] = [12, 4, 3, 8]
// n1 recebe 12
// eh pulado o valor 4
// n3 recebe 3
// eh pulado o valor 8
// n5 recebe undefined, pois não existe um elemento naquela pos do array e não ele não tem um valor default
// n6 recebe 0, pois não existe um elemento naquela pos do array e seu valor default eh 0
console.log(n1, n3, n5, n6) // 12 3 undefined 0