const _velocidade = Symbol('velocidade');
class Carro {
	constructor(nome) {
		this.nome = nome;
		this[_velocidade] = 0;
	}

	get velociadade() {
		return this[_velocidade];
	}

    set velociadade(valor){
        if(typeof valor !== 'number' || valor >=100 || valor <= 0) return;

        this[_velocidade] = valor;
    }

	acelerar() {
		if (this[_velocidade] < 100) this[_velocidade]++;
	}

	desacelerar() {
		if (this[_velocidade] > 0) this[_velocidade]--;
	}
}

const c1 = new Carro('fusca');

for (let i = 0; i < 200; i++) {
	c1.acelerar();
}

c1.velociadade = 1999;
console.log(c1.velociadade);

for (let i = 0; i < 200; i++) {
	c1.desacelerar();
}

console.log(c1.velociadade);

c1.velociadade = 50;

console.log(c1.velociadade)
