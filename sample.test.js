//let firstNumber = 72;
//let secondNumber = 5;

const {calculate, addTwoNumbers, subtractTwoNumbers, multiplyTwoNumbers, divideTwoNumbers, getEvenNumbers, getAreaOfTriangle, convertCelsiusToFahrenheit, checkForBothEvenAndOdd, checkLeapYear, vowelsCheckInAlphabet} = require("./callBackFunction.js") //calling or importing d file name

test("add two numbers" , ()=> {       
let firstNumber = 72; //Arrange
let secondNumber = 5;

const result = addTwoNumbers(firstNumber, secondNumber); //Act

let answer = 77;

expect(result).toBe(answer); //Assert

});



test("minus two numbers work" , ()=>{
let firstNumber = 72;
let secondNumber = 5;

const result = subtractTwoNumbers(firstNumber, secondNumber);

let answer = 67;

expect(result).toBe(answer);
});



test("multiply two numbers work" , ()=>{
let firstNumber = 72;
let secondNumber = 5;

const result = multiplyTwoNumbers(firstNumber, secondNumber);

let answer = 360;

expect(result).toBe(answer);
});


test("divide two numbers work" , ()=>{
let firstNumber = 72;
let secondNumber = 5;

const result = divideTwoNumbers(firstNumber, secondNumber);

let answer = 14.4;

expect(result).toBe(answer);

});


test("return even numbers", ()=>{
let arrayOfNumbers = [2,3,4,5,6,7,8];
let answer = [2,4,6,8];
let result = getEvenNumbers(arrayOfNumbers);
expect(result).toEqual(answer)

});



test("return the area of a triangle", ()=>{
let heightOfTriangle = 30;
let widthOfTriangle = 5;
let answer = 75;
let result = getAreaOfTriangle(heightOfTriangle, widthOfTriangle);
expect(result).toBe(answer);


});


test("convert temperature from celcius to fahrenheit", ()=>{ // formula = c * 9/5(1.8) + 32
let celsius = 30;
let answer = 86;
let result = convertCelsiusToFahrenheit(celsius);
expect(result).toBe(answer);


});


test("to return true if it a even", ()=>{
let allNumbers = 12;
let answer = "";
let result = checkForBothEvenAndOdd(allNumbers);
expect(result).toBeTruthy();


});

test("leap year calculation", ()=>{
let year = 2024
let answer = "";
let result = checkLeapYear(year);
expect(result).toBeTruthy();


});

test("check for alphabet and return the vowel", ()=>{
let alphabet = "Good";
let answer = 1;
let result = vowelsCheckInAlphabet(alphabet);
expect(result).toBe(answer);



});







