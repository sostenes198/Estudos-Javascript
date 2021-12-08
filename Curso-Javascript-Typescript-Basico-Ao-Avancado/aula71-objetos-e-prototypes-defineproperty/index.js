function Produto(nome, preco, estoque) {
  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    value: estoque, // valor da chave
    writable: false, // configura se pode alterar o valor
    configurable: true, // configura se pode reconfigurar a chave
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true, 
      value: estoque, 
      writable: false, 
      configurable: true,
    },
    preco: {
        enumerable: true, 
        value: estoque, 
        writable: false, 
        configurable: true,
      },
  });
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(p1);
