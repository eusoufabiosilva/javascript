let num = [5,8,2,9,3]
num.push(1) // poem um numero definido ao final
num.sort() // ordena os numeros
console.log(num) 
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num [0]}`)
let pos = num.indexOf(4)
if (pos == -1) {
    console.log ('O valor não foi encontrado')
} else {
console.log(`O valor 4 está na posição ${pos} `)
}