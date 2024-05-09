"use strict";
// 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
let ordinal_number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//using for loop method
for (let numbers of ordinal_number) {
    let ordinalEnding;
    if (numbers === 1) {
        ordinalEnding = "st";
    }
    else if (numbers === 2) {
        ordinalEnding = "st";
    }
    else if (numbers === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log(`${numbers}${ordinalEnding}`);
}
