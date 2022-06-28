// Desafio 1
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

// Desafio 2
function calcArea() {
  // seu código aqui
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8

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
 console.log(fizzBuzz([9, 25]));


// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
