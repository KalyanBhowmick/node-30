const crypto = require('crypto');
const algorithm = 'aes-256-ctr';
const password = 'TopSecret:)';

function encrypt(text) {
    let cipher = crypto.createCipher(algorithm, password);
    let crypted = cipher.update(text, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}

function decrypt(text) {
    let decipher = crypto.createDecipher(algorithm, password);
    let dec = decipher.update(text, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
}

const text = 'I love web development';
const e = encrypt(text);
console.log('Encrypted text', e);

let d = decrypt(e);
console.log('Decrypted text', d);