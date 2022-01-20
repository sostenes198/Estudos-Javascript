class DispositivoEletronico {
	constructor(nome) {
		this.nome = nome;
		this.ligado = false;
	}

	ligar() {
		this.ligado = true;
	}

	desligar() {
		this.ligado = false;
	}
}

class SmarthPhone extends DispositivoEletronico {
	constructor(nome, cor) {
		super(nome);
		this.cor = cor;
	}

	ligar() {
		console.log('Método sobrescrito');
		this.ligado = true;
	}
}

const s1 = new SmarthPhone('Iphone');
