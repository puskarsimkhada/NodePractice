import data from './app.js'
// const crypto = require('crypto');
import crypto from 'crypto'
const randomValue = crypto.randomBytes(8).toString("hex");
console.log(randomValue);

const createHash = crypto.createHash("sha256").update("Puskar").digest("hex");
console.log(createHash);
data.add(5,13);
data.sub(5,12);

