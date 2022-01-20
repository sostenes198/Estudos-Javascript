function rand(min, max) {
	min *= 1000;
	max *= 1000;
	return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
	return new Promise((resolve, reject) => {
		if (typeof msg !== 'string') {
			reject(false);
			return;
		}

		setTimeout(() => {
			resolve(msg);
		}, tempo);
	});
}

// Promise.all Promice.race Promise.resolve Promise.reject

const promises = ['Primeiro valor', esperaAi('Promise 1', 3000), esperaAi('Promise 2', 500), esperaAi('Promise 3', 1000), 'Outro valor'];

// Promise.all(promises)
// 	.then((valor) => {
// 		console.log(valor);
// 	})
// 	.catch((error) => console.log(error));

Promise.race(promises)
	.then((valor) => {
		console.log(valor);
	})
	.catch((error) => console.log(error));
