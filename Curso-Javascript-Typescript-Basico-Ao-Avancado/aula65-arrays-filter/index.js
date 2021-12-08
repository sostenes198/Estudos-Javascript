const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbackFilter(valor, indice, array) {
  if (valor > 10) return true;

  return false;
}

const numerosFiltrados = numeros.filter((valor, indice, array) => {
  console.log(valor);
  console.log(indice);
  console.log(array);
  return valor > 10;
});
console.log(numerosFiltrados);
