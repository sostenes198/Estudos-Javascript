const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce((acumulador, valor, indice, array) => {
  return (acumulador += valor);
}, 0);

console.log(total);

var numerosMod8 = numeros.reduce((acumulador, valor) => {
  if (valor % 8 == 0) acumulador.push(valor);

  return acumulador;
}, []);


console.log(numerosMod8)