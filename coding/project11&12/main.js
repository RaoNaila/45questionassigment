// question 11 array practise  create array and print names one by one
var names = ['Naila', 'Aamir', 'Hussain', 'Haider'];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// question 12 send message one by one using array
var myFriend = ['Naila', 'Aamir', 'Hussain', 'Haider'];
myFriend.forEach(function (myFriend) { return console.log("Hello ".concat(myFriend, ",  How are you?")); });
