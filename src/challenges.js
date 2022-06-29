// Desafio 1 - COMCLUIDO
function compareTrue(parametro1, parametro2) {
if (parametro1 === true && parametro2 === true) {
  return true;
} else {
  return false;
}
}

const macaco = true;
const girafa = true;

console.log(compareTrue(macaco,girafa));

// Desafio 2 - NÃO PASSOU

// function calcArea(base, height) {
//   return ((base*height)/2)
// }
// calcArea(10,50);
// calcArea(5,2);
// // calcArea(51,1);

// // Desafio 3
// function splitSentence() {
//   // seu código aqui
// }

// function concatName([]) {
//  console.log(concatName[concatName.length -1], concatName[0]);
// }

// concatName['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
// concatName['foguete', 'não', 'tem', 'ré'];
// concatName['captain', 'my', 'captain'];

// // Desafio 5
// function footballPoints() {
//   // seu código aqui
// }

// Desafio 6
// function highestCount() {

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  if ((Math.abs(mouse - cat1) > Math.abs(mouse - cat2))) {
  return 'cat2';
} else if ((Math.abs(mouse - cat2)) > (Math.abs(mouse - cat1))) {
  return 'cat1';
} else if ((Math.abs(mouse - cat2)) === (Math.abs(mouse - cat1))) {
  return 'os gatos trombam e o rato foge';
}
}
console.log(catAndMouse(0, 3, 2));
console.log(catAndMouse(10, 4, 22));
console.log(catAndMouse(1, 0, 2));

// Desafio 8 - CONCLUIDO

function fizzBuzz(array) {
  let result = [];
  for ( i=0; i<array.length; i +=1) {
   if (array[i] % 3 === 0 && array[i] % 5 === 0 ) {
   result.push("fizzBuzz");
 } else if (array[i] % 3 === 0) {
   result.push("fizz");
  } else if (array[i] % 5 === 0) {
   result.push("buzz");
  } else {
   result.push("bug!");
  }
 }
 return result;
 }
 console.log(fizzBuzz([9, 25])); //TESTE

// Desafio 9
// function encode(string) {
// let arrayArmazena = string.split('');
// for (let i=0; i<arrayArmazena.length; i += 1) {
//   if (arrayArmazena[i] === 'a') {
//     arrayArmazena[i] = '1';
//   } else if (arrayArmazena[i] === 'e') {
//     arrayArmazena[i] = '2';
//   } else if (arrayArmazena[i] === 'i') {
//     arrayArmazena[i] = '3';
//   } else if (arrayArmazena[i] === 'o') {
//     arrayArmazena[i] ='4';
//   } else if (arrayArmazena[i] === 'u') {
//     arrayArmazena[i] = '5';
//   }
// }
// }
// console.log (encode('a hello aeiou'));

// function decode() {
// seu código aqui

// Desafio 10
// function techList() {
//   // seu código aqui
// }

// module.exports = {
//   calcArea,
//   catAndMouse,
//   compareTrue,
//   concatName,
//   decode,
//   encode,
//   fizzBuzz,
//   footballPoints,
//   highestCount,
//   splitSentence,
//   techList,
// };
