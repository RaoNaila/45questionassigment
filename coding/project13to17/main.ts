//array for transportation question 13

// let transportation:string[]=["car","bike","vigo"];

// for(let i=0; i<transportation.length; i++){
//     console.log('i would like to own a ' + transportation[i]);
// }

// guest list question 14

// let guestList:string[]=["Naila","Farhana","Shabana"];
//  for(let i=0; i<guestList.length; i++){
//  console.log('Dear miss.'  + guestList[i] + ',\n i warmley inviting you in our birthday party.\n Thank you ');
//  }

//  questio 15 changing gurst list

//  guestList:string[]=["Naila","Farhana","Shabana"let];
//  for(let i=0; i<guestList.length; i++){
//  console.log('Dear miss.'  + guestList[i] + ',\n i warmley inviting you in our birthday party.\n\n  Thank you ');
//   }

//   let abscentGuest:string="Shabana";

//   let newGuest:string= "Bushra";

//   guestList[2]=newGuest;
//   for(let i=0; i<guestList.length; i++){
//     console.log('Dear miss.'  + guestList[i] + ',\n i warmley inviting you in our birthday party.\n \n Thank you \n\n');
//      }

//console.log(`miss ${abscentGuest} is not comimg to b   irthday party.`);

// question 16 adding more guest in array 15 question

//    let guestList:string[]=["Naila","Farhana","Shabana"];
//   let abscentGuest:string="Shabana";

//   let newGuest:string= "Bushra";

//   guestList[2]=newGuest;
//   for(let i=0; i<guestList.length; i++){
//     console.log('Dear miss.'  + guestList[i] + ',\n i warmley inviting you in our birthday party.\n \n Thank you \n\n');
//      }

// console.log(`miss ${abscentGuest} is not comimg to b   irthday party.`);
// console.log( "we find big table so we are inviting 3 more guest");

// guestList.unshift('Shaista');
// guestList.splice(2,0,'Rehana');
// guestList.push('Farzana');
// for(let i=0; i<guestList.length; i++){
// console.log('Dear miss.'  + guestList[i] + ',\n i warmley
//inviting you in our birthday party.\n \n Thank you \n\n');
//  }

// question no 17  creat new guestlist from question no 16 and print
//remove 4 guest from quetion 16 array only 2 guest can invit .

let guestList: string[] = [
  "Shaista",
  "Farzana",
  "Naila",
  "Rehana",
  "Bushra",
  "Farhana",
];
console.log(
  "unfortunatly! the new dinner table will not arrive so we can invite only two guest."
);

//removing 4 guest only 2 guest remain and each time pop a message for
// uninviting to removing guest.

while (guestList.length > 2) {
  let removedGuest: string | undefined = guestList.pop();
  if (removedGuest !== undefined) {
    console.log(
      `sorry ${removedGuest}, we can not invite you because of unsufficient arrangement.`
    );
  }
}
//print a message for remaining 2 guest that still they are invited

for (let i = 0; i < guestList.length; i++) {
  console.log(
    "Dear miss"+ 
      guestList[i]  +
      ",\n i stii inviting you in our birthday party.\n \n Thank you \n\n"
  );
};

// remove last two names from list and print empty []
guestList.splice(0,guestList.length)

console.log("updated ! guest list:", guestList);

