
// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.

function create_car(manufacturer_name:string,model:string, ...options){
    let car={
        manufacturer:manufacturer_name,
        model1:model,
    };
    //add additional option to the car object
    options.forEach(option=>{
    let [key,value]=option.split(":");
    car [key.trim()]=value.trim();
    });
    return car;
}

let my_car=create_car("Suzuki","land cureser","color:black");
console.log(my_car);

let buyCar=create_car("toyota","corolla","year:2024","color:red");
console.log(buyCar);

