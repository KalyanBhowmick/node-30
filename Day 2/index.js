const fs = require('fs');

// reading a file asynchronously
fs.readFile('message.txt', (err, data) => {
    if (err) {
        throw err;
    }

    console.log("Content : ", data);
});

// reading a file synchronously
let fileName = 'content.txt';

const content = fs.readFileSync(fileName);

console.log('Content : ' + content);


// writing a file asynchronoulsy 

let writeContent = "this is the content in the file";

fs.writeFile('message.txt', writeContent, (err) => {
    if (err) {
        throw err;
    }

    console.log('It\'s saved!');
});

// writing the file synchronoulsy

var syncContent = "We are writing this file synchronously";

fs.writeFileSync('content.txt', syncContent);
console.log('File written successully');

// Writing a file asynchronously

let new_data = "This is a new data"

fs.appendFile('input.txt', new_data, (err) => {
    if (err) {
        throw err;
    }
    console.log('The new_content appended successfully');
});

// append file synchronously

syncContent = 'Append this'

fs.appendFileSync('input.txt', syncContent);
console.log('File appended successfully');

// rename a file asynchronously
// you have to pass the relative path of the file from the current directory

fs.rename('data.txt', 'new_data.txt', (err) => {
    if (err) {
        throw err;
    }

    console.log('File renamed successfully');
});

console.log("This method is Asynchronous");

// rename file synchronoulsy
fs.renameSync('data.txt', 'newData.txt');
console.log('File renamed successfully');

console.log('This method is synchrnous');

// Deleting file asynchronously

fileName = 'content.txt';

fs.unlink(fileName, (err) => {
    if (err) {
        throw err;
    }

    console.log('File deleted successfully');
});

// delete file synchronoulsy

fileName = 'data.txt';
fs.unlinkSync(fileName);

console.log('File deleted successfully');