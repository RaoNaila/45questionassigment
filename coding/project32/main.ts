// 2. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let currentUser:string[]=["Aamir","Imran","Shahid","Zahid","Adnan"];
 
let new_users:string[]=["Rehan","Farhan","Saad","aamir","Adnan"];

new_users.forEach(newOneUser =>{
    let our_codition=currentUser.some(currentOneUser=>currentOneUser.toLowerCase()===newOneUser.toLowerCase())
    if(our_codition){
        console.log(`sorry ${newOneUser} is not available`);
        

    }else{
        console.log(`this user name ${newOneUser} is available.`);
        
    }


})

    
