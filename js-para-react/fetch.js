//Fetch é uma interface de javascript para trabalhar com requisições HTTP.

// fetch("https://rickandmortyapi.com/api")
//     .then((response) => response.json())
//     .then((json) => {console.log(json)})

// ASYNC /AWAIT
// Fetch vai nos retornar uma promessa(promisse). Podemos criar uma função assíncrona que irão esperar o código resolver, antes de continuar com o código.

const fetchPersonagens = async (url) => {
    const res = await fetch(url, {
        method:"GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    const json = await res.json()
    return json
}
console.log(fetchPersonagens("https://rickandmortyapi.com/api/character"))