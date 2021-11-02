const pessoa = {
    nome: "Soso",
    idade: 25,
    endereco: {
        //rua: "Av Brasil",
        numero: 320
    }
}

// Atribuição via desestruturação

const { nome } = pessoa;
const { endereco : { rua: r = 12345, numero : n} } = pessoa;

console.log(r, n)