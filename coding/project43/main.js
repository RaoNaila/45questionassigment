"use strict";
// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
function show_magicians(Magicians) {
    Magicians.forEach(name => console.log(name));
}
//modify function
function make_great(magician) {
    return magician.map(name => `the great ${name}`);
}
let magicians_name = ["umroo ayyar", "samri jadugar", "bilbatori"];
//making copy of originsl srrsy using slice method;
let copy_magicians_name = magicians_name.slice();
//modify copied array
let copy_great_magician = make_great(copy_magicians_name);
//show both orignal and copy modify arraay
show_magicians(magicians_name);
show_magicians(copy_great_magician);
