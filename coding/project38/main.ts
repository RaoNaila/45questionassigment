// 38. Cities: Write a function called describe_city() that accepts the name of
// a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the
// default country.
 function describe_city(city:string,country="Pakistan"){
    console.log(`${city} is in ${country}`);
    
};
//calling function
describe_city("karachi");
//2nd call
describe_city("Islamabad");
//3rd time calling without by default country
describe_city("Makkah","Saudi arab");6