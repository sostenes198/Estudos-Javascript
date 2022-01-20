class ControleRemoto {
	constructor(tv) {
		this.tv = tv;
		this.volume = 0;
	}

	aumentarVolume() {
		this.volume += 2;
	}

	diminuirVolume() {
		this.diminuirVolume -= 2;
	}

	static trocaPilha() {
		console.log('Trocando pilha');
	}
}

ControleRemoto.trocaPilha();
