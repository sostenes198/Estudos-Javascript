class Pessoa {
	constructor(nome, sobrenome) {
		(this.nome = nome), (this.sobrenome = sobrenome);
	}

	falar() {
		console.log(`${this.nome} está falando...`);
	}

	comer() {
		console.log(`${this.nome} está comendo...`);
	}
}

function Pessoa2(nome, sobrenome) {
	this.nome = nome;
	this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
	console.log(`${this.nome} está falando...`);
};

Pessoa2.prototype.comer = function () {
	console.log(`${this.nome} está comendo...`);
};

const p1 = new Pessoa('Sostenes', 'Souza');
const p2 = new Pessoa2('Raquel', 'Gontijo');
