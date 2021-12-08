// forma padrão
const a1 = [1,2,3];
const a2 = [3,4,5]
const a3 = [6,7];

const a4 = a1.concat(a2).concat(a3, [8,9,10]);
console.log(a4);

// ... rest operator -> ... spread
const b1 = [1,2,3];
const b2 = [3,4,5]
const b3 = [6,7];

const b4 = [...b1, ...b2, ...b3, 8, 9, 10];
console.log(b4);

