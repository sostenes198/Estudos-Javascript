// funções definidas com a palavra function, existe a palavra reservada arguments que contem todos argumentos enviados

function funcao1(){
    console.log(arguments);
};


// funcao1('1', 1, 2, 3, '4', "Testando");

// Argumento via desestruturação
function funcao2({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
};

//funcao2({nome: 'Sostenes', sobrenome: 'Goncalves', idade: 26});

// Rest operator
function funcao3(operador, acumulador, ...numeros){
    console.log(operador, acumulador, numeros);
};

funcao3("+", 0, 10, 20, 30, 40, 50)

// OBS: Não existe arguments em arrow functions. ^_^