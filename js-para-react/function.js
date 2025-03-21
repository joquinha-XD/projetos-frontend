// Funções
function upperName (name) {
    return name.toUpperCase()
}
console.log(upperName("gabriel"));

// Função com Arrow Function

const lowerName = (name) => {
    return name.toLowerCase();
}
console.log(lowerName("GABRIEL"));

//Crie 3 funções utilizando a sintaxe de arrow function:

// 1º Função de cálculo da área do quadrado
const areaQuadrado = (lado) => {
    return lado*lado
}
console.log(areaQuadrado(10))

// 2º Função de cálculo do IMC
const calculoImc = (peso, altura) => {
    return (peso/(altura*altura)).toFixed(2)
}
console.log(calculoImc(60, 1.76))

// 3º Função de cálculo da área do triângulo
const areaTriangulo = (base, altura) => {
    return (base*altura)/2
}
console.log(areaTriangulo(10, 15))
