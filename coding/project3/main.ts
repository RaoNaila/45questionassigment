//lowercase
let personname:string ="Naila wakeel"
console.log("lowercase:",personname.toLowerCase());

//UPPER CASE
console.log("upercase:",personname.toUpperCase());

//titlecase
console.log("titlecase:",personname.replace(/\nw/g,c=>c.toUpperCase()));
