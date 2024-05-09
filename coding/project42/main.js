"use strict";
// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has
function show_magicians(Magicians) {
    Magicians.forEach(name => console.log(name));
}
//modify function
function make_great(magician) {
    return magician.map(name => `the great ${name}`);
}
let magicians_name = ["umroo ayyar", "samri jadugar", "bilbatori"];
//call function to print each magician name
show_magicians(magicians_name);
console.log("<===========================the end==========================>");
let greet_magician = make_great(magicians_name);
console.log(greet_magician);
