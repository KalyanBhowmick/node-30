const fs = require('fs');

// Finding a specific text in RE
let fileName = 'data.txt';
let str = fs.readFileSync(fileName).toString();
let pattern = /man/gim;
let myArray = str.match(pattern);
let len = myArray.length;

console.log("Occurrences of pattern in the string is : " + len);

//Finding number of tags using RE

fileName = 'data.html';
str = fs.readFileSync(fileName).toString();
pattern = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim;

myArray = str.match(pattern);
len = myArray.length;

console.log("Occurrences of pattern in the string is : " + len);

// validating an email using RE

str = 'kbhowmick067gmail.com';
pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

let res = str.match(pattern);

if (res) {
    console.log("Valid email address");
} else {
    console.log("Please enter a valid address");
}

// Validating Hexadecimal number using RE
str = 'FFFF';
pattern = /^[a-fA-F0-9]+$/g;

res = str.match(pattern);

if (res) {
    console.log("Valid hexa decimal number");
} else {
    console.log("Please enter a valid hexadecimal number");
}

// Validating password using RE
str = 'knhu76ht%h';
pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;;

res = str.match(pattern);

if (res) {
    console.log("Valid password");
} else {
    console.log("Please enter a valid password");
}

