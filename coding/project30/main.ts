
// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
// after they log in to a website. Loop through the array, and print a greeting to each user:

// • If the username is 'admin', print a special greeting, 
//such as Hello admin, would you like to see a status report?

let users:string[]=["NAILA","FARHANA","SHABANA","REHANA","ADMIN"];

for(let user of users){
    if (user === "ADMIN"){
        console.log("Hello admin, would you like to see a status report.");
        
    }
else{
    console.log(`Hello ${user}, thank you for logining again. `);
    
}
}