const crypto = require('crypto');
const fs = require('fs');

let pubk, privk, secretData, origData;

pubk = privk = fs.readFileSync('pub.key').toString();

const buf = Buffer.from('This is a secret code', 'utf8');

secretData = crypto.publicEncrypt(pubk, buf);
console.log(secretData.toString('utf8'));

privk = {
    key: fs.readFileSync('priv.key').toString(),
    passPhrase : 'best'
}

origData = crypto.privateDecrypt(privk, secretData);
console.log(origData.toString());