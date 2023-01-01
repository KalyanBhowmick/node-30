console.time('division');

let x = 10, y = 20;
let result = x/y;

if (result == 2) {
    console.log("Result : %d", result);
} else {
    console.log("Result : " + result);
}

console.timeEnd('division');

if ( (result % 2) == 0) {
    console.log("Result : %d".result);
} else {
    console.warn("Warning : Decimal Number");
}