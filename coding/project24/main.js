"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you
// want to try more comparisons, write more tests. Have at least one True and one False
// result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
//first test foe string equality
let apple = "apple";
console.log("apple is equal to apple");
console.log(apple == "apple");
//inequilant sting 
console.log("appel is not equal to apple");
console.log(apple != "apple");
//test using lower case function
let myName = "NAILA";
console.log("my name NAILA is equal to naila ");
console.log(myName.toLowerCase() == "naila");
// inequality of lowercase
console.log("my name NAILA is  not equal to naila ");
console.log(myName.toLowerCase() != "naila");
// • Numerical tests involving equality and inequality, greater than and less than, 
//greater than or equal to, and less than or equal to
let five = 5;
let six = 6;
//equality test
console.log("well! five is equal to 5");
console.log(five == 5);
//inequality test 
console.log("five is equal to 6 (answer must be ptint in false)");
console.log(five == 6);
//greater than and less than
console.log("six is greater then 5");
console.log(six > 5);
//less then
console.log("five is less then 6");
console.log(five < 6);
//false condition for less then
console.log("six is less then 5");
console.log(six < 5); //print false 
// greater than or equal to, 
console.log("six is greatr then or equal to 5");
console.log(six >= 5);
//less then or equal to,
console.log("five is less then or equal to 6");
console.log(five <= 6);
//for flase less then 
console.log("six is equal to or less then 5");
console.log(six <= 5); //print flase
// Tests using "and" and "or" operators
//usimg and operator
console.log("six is not equal to 5 and six is less then 5");
console.log(six != 5 && six < 5);
console.log("six is greater then 5 and six is not equal to 5");
console.log(six > 5 && six != 5);
//using(||) or operators
console.log("six is equal to 6 or six is equql to 5");
console.log(six == 6 || six == 5);
//for false result both side must be false
console.log("five is grater then 6 or six is less then 5");
console.log(five > 6 || six < 5);
// • Test whether an item is in a array
let myGrocery = ["Tomato", "Potato", "Bringle", "Carrot"];
console.log(`there is potato in my grocery list`);
console.log(myGrocery.includes("Potato"));
// • Test whether an item is not in a array
console.log(`ther is capcicum in my grocery list`);
console.log(myGrocery.includes("capcicum"));
//or using not includin method
console.log(`ther is not Carrot in my grocery list`);
console.log(!myGrocery.includes("Carrot"));
