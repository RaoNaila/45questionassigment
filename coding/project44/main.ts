// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time

function  make_sandwitch(...items:string[]){
    console.log("\n your selected ingridient ingridient sandwitch.\n ");
    items.forEach(singleitem=>console.log(singleitem))
    console.log("\n Here is your delicius sandwitch \n");
    
};
 console.log("!!!!!!!!!!welcome!!!!!!!!!!!!!!!");
//caling function with 3 times

make_sandwitch("chicken","salty","vegitable");
console.log("<=========================.");


make_sandwitch("egg"," brownbread","cheez");
console.log("<=========================.");
make_sandwitch("grilled sandwitch","fish","mayo","fish sauce");
console.log("<=========================.");
console.log("<=======ordre again plz================>");
