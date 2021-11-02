/*
    Primitivos (Imutáveis) - string, number, boolean, undefined, null (bigint, symbol)

    Referência (Mutável) - array, object, function
*/

// fazer copia de valores por referência

const testArrayA = [1, 2, 3, 4];
const testArrayB = [...testArrayA];

testArrayB.push(5);

console.log(testArrayA, testArrayB);

const testObjectA = { nome: "Soso", idade: 10 };
const testObjectB = { ...testObjectA };
testObjectB.nome = "Maj";
testObjectB.idade = 14;

console.log(testObjectA, testObjectB)