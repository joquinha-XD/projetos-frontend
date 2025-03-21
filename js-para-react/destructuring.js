//Destructuring

//Capturando elementos do objeto de maneira tradicional
const handleMouse = (event) => {
    const clientX = event.clientX;
    const clientY = event.clientY;
    console.log(`Eixo X: ${clientX}`)
    console.log(`Eixo Y: ${clientY}`)
}

//Desestruturando o objeto dentro da função
const handleMouseDes = (event) => {
    const {clientX, clientY, screenX, screenY} = event
    console.log(clientX, clientY)
}

//Desestruturando o objeto no parâmetro
const handleMouseMove = ({clientX, clientY}) => {
    console.log(clientX)
}

// document.documentElement.addEventListener('mousemove', handleMouseMove)


//Crie uma função utilizando Arrow Function para pega o objeto abaixo e desestrutura-lo.
const usuario = {
    nome: 'Gabriel',
    idade: 17,
    cidade: 'Maceió',
    profissão: 'Programador',
    hobbie: ['Jogar', 'Assistir', 'Torcer para o Mengão']
}

const desctructObj = (objeto) => {
    const {nome, idade, cidade, profissão, hobbie} = objeto
    console.log(`Nome: ${nome}, idade: ${idade}, cidade: ${cidade}`)
}
desctructObj(usuario)

const desctructObjParam = ({nome, idade, cidade, profissão, hobbie}) => {
    console.log(nome, idade, cidade, profissão, hobbie)
}
desctructObjParam(usuario)