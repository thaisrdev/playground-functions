// Desafio 1 - CONCLUIDO
function compareTrue(parametro1, parametro2) {
  if (parametro1 === true && parametro2 === true) {
    return true;
  }
  return false;
}

const macaco = true;
const girafa = true;

console.log(compareTrue(macaco, girafa));

// Desafio 2 - CONCLUIDO

function calcArea(base, height) {
  return ((base * height) / 2);
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// // Desafio 3 - CONCLUIDO

function splitSentence(text) {
  let divide = text.split(' ');
  return divide;
}
splitSentence('go Trybe');

// // Desafio 4  - CONCLUIDO

function concatName(arrayStrings) {
  let newArray = [];
  newArray.push(arrayStrings[arrayStrings.length - 1]);
  newArray.push(arrayStrings[0]);
  return newArray.join(', ');
}

// // Desafio 5 - CONCLUIDO

function footballPoints(wins, ties) {
  return ((wins * 3) + (ties * 1));
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6 - CONCLUIDO
function highestCount(array4) {
  let repeat = 0;
  for (let index = 0; index < array4.length; index += 1) {
    if (Math.max(...array4) === array4[index]) {
      repeat += 1;
    }
  }
  return repeat;
}
// Desafio 7 - CONCLUIDO

function catAndMouse(mouse, cat1, cat2) {
  if ((Math.abs(mouse - cat1) > Math.abs(mouse - cat2))) {
    return 'cat2';
  } if ((Math.abs(mouse - cat2)) > (Math.abs(mouse - cat1))) {
    return 'cat1';
  } if ((Math.abs(mouse - cat2)) === (Math.abs(mouse - cat1))) {
    return 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(0, 3, 2));
console.log(catAndMouse(10, 4, 22));
console.log(catAndMouse(1, 0, 2));

// Desafio 8 - CONCLUIDO

function fizzBuzz(array) {
  let result = [];
  for (i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (array[i] % 3 === 0) {
      result.push('fizz');
    } else if (array[i] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}
console.log(fizzBuzz([9, 25]));

// Desafio 9
// eslint-disable-next-line complexity
let string = '';
function encode(string) {
  let letras = string.split('');
  for (let index = 0; index < letras.length; index += 1) {
    if (letras[index] === 'a') {
      letras[index] = '1';
    } if (letras[index] === 'e') {
      letras[index] = '2';
    } if (letras[index] === 'i') {
      letras[index] = '3';
    } if (letras[index] === 'o') {
      letras[index] = '4';
    } if (letras[index] === 'u') {
      letras[index] = '5';
    }
  }
 return letras.join('');
}
console.log(encode('a hello aeiou'));

  function decode(string) {
    let letras = string.split('');
    for (let index = 0; index < letras.length; index += 1) {
      if (letras[index] === '1') {
        letras[index] = 'a';
      } if (letras[index] === '2') {
        letras[index] = 'e';
      } if (letras[index] === '3') {
        letras[index] = 'i';
      } if (letras[index] === '4') {
        letras[index] = 'o';
      } if (letras[index] === '5') {
        letras[index] = 'u';
      }
    }
   return letras.join('');
  }
  console.log(decode('1 h2ll4 12345'));


// Desafio 10
function techList() {
//   // seu código aqui
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
