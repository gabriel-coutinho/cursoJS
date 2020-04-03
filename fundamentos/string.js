const palavra = 'Gostosa'

console.log(palavra.charAt(4)) // o
console.log(palavra.length) // 7
console.log(palavra.charAt(1900)) // Não dá erro retorna vazio
console.log(palavra.indexOf('o')) // 1, primeira ocorrencia, para a ultima existe lastIndexOf

console.log(palavra.substring(1)) // do indice X ate o fim
console.log(palavra.substring(1, 5)) // inclui o primeiro indice, não o último

console.log('Thaynnara '.concat(palavra).concat(' de mais'))
console.log('Thaynnara ' + palavra + ' de mais') // fazem a mesma coisa

console.log(palavra.replace('g', 7)) // Case sensitive
console.log(palavra.replace("a", 4)) // Gostos4
console.log(palavra.replace(/o/g, "0")) // o g faz com que seja para todas ocorrencias
                                        // o primeiro / significa inicio exp. regular    

console.log(palavra.split("s")) // [ 'go', 'to', 'a' ]