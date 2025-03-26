// // Spread ou espalhament

// const frutas = ["banana", "maça", "uva", "melão"]

// // frutas.pop()
// // frutas.push("laranja")

// const novasFrutas = ["melancia", "jabuticaba", ...frutas, "pitanga"]

// console.log(novasFrutas)

// //Utilizando o spread em uma função

// const numeros = [2, 3, 5]

// const soma = (a, b, c) => {
//     console.log(a + b + c)
// }

// soma(...numeros)

// //Rest

// const somarest = (...valores) => {
//     return valores.reduce((anterior, atual) => anterior + atual)
// }

// console.log(somarest(1, 2, 3, 5))
// console.log(somarest(10, 25, 40, 85))

//Exercício
//Crie uma função que receba o nome e as notas dos alunos. O primeiro argumento será o nome e o segundo serão as notas. O retorno dessa função deve apresentar o nome e a média desse estudante.

const media = (nome, ...nota) => {
    const media = nota.reduce((anterior, atual) => anterior + atual)/nota.length
    return `Estudante: ${nome}, média: ${media}`
}
console.log(media("Gabriel", 10, 5, 7, 8, 5))