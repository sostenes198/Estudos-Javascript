const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const [primeiroNumero, segundoNumero, ...resto] = numeros;

const [um, , tres, , cinco] = numeros;

console.log(um, tres, cinco)