const fs = require('fs');

const fileName = "text.txt";
const writeFile =  fs.writeFileSync(fileName, "This is my file ", "utf-8");
console.log(writeFile);