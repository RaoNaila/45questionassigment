"use strict";
// 39. City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value
// that’s returned.
// function with parametrs and return value
function city_country(city, country) {
    return `${city},${country}`;
}
;
//calling a functin that returns value
console.log(city_country("karachi", "Pakistan"));
//2nd return
console.log(city_country("Faisal abad", "Pakistan"));
//3rd return
console.log(city_country("tokiyo", "Japan"));
