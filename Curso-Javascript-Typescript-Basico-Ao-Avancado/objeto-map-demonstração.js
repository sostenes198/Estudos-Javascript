const pessoas = [
  { id: 1, nome: "Luiz" },
  { id: 2, nome: "Sósó" },
  { id: 3, nome: "Souza" },
];

const novasPessoas = new Map();
for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, { ...pessoa });
}

console.log(novasPessoas)