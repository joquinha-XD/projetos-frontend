const precos = [
    "R$ 300",
    "R$ 200",
    "Cartão de Crédito",
    "500",
    "Pix",
    "R$ 150",
]

//Filter
//Retorna um novo array com elementos que passam em um determinado teste (ou condição).

const precosFilter = precos.filter((preco) => preco.includes("R$"))



//Map
//Retorna um array com o mesmo tamanho do array original, mas é utilizado para transformar esses elementos do array

const precoNumeros = precosFilter.map((preco) => Number(preco.replace("R$", "")))
const somaNumeros = precoNumeros.reduce((anterior, atual) => anterior + atual)

console.log(somaNumeros)
