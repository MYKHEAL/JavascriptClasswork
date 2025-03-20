

function calculate(firstValue, secondValue, callBackFunction){              // functionSubtractTwoNumbers;
return callBackFunction(firstValue, secondValue);

}

function addTwoNumbers(numberOne,numberTwo){
let result = numberOne + numberTwo;
return result;

}

function subtractTwoNumbers(numberOne, numberTwo){
let result = numberOne - numberTwo;
return result;

}

function multiplyTwoNumbers(numberOne,numberTwo){
let result = numberOne * numberTwo;
return result;
}

function divideTwoNumbers(numberOne, numberTwo){
let result = numberOne / numberTwo;
return result;
}


function getEvenNumbers(array){
let arrayOfEvenNumbers = [];
for(let value of array){
if (value % 2 === 0){
arrayOfEvenNumbers.push(value);

}
}
return arrayOfEvenNumbers;
}


function getAreaOfTriangle(height, width){
let area = height * width / 2;
return area;

}

function convertCelsiusToFahrenheit(celsius){
let fahrenheit = celsius *  1.8 + 32;
return fahrenheit;

}

function checkForBothEvenAndOdd(number){
if(number % 2 === 0){
return true;
}
if(value % 2 !== 0){
return false;
}

}

function checkLeapYear(year){
if(year % 4 === 0){
return true;
}
if(year % 4 !== 0){
return false;
}
if(year % 100 === 0){
return true;
}
if(year % 100 !== 0){
return false;
}
if(year % 400 === 0){
return true;
}
if(year % 400 === 0){
return false;
}
}

function vowelsCheckInAlphabet(alphabet) {
  let temp = 0;
  for (let count = 0; count < alphabet.length; count++) {
    if (alphabet.charAt(count) === "o") {
      temp = count;
      break;
    }
  }
  return temp; 
}




module.exports = {calculate, addTwoNumbers, subtractTwoNumbers, multiplyTwoNumbers, divideTwoNumbers, getEvenNumbers, getAreaOfTriangle, convertCelsiusToFahrenheit, checkForBothEvenAndOdd, checkLeapYear, vowelsCheckInAlphabet}