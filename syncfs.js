const fs = require('fs');
const path = require("path");

const fileName = "text.txt";
const filePath = path.join(__dirname,fileName);


//writing into the file
const writeFile =  fs.writeFileSync(filePath, "This is my updated file ", "utf-8");
console.log(writeFile);

//Reading a file
// const readFile = fs.readFileSync(filePath, "utf-8");
// console.log(readFile);

//Updating the file
// const appendFile = fs.appendFileSync(filePath, "This is appended file lastest", "utf-8");
// console.log(appendFile);

//Delete file
// const deleteFile = fs.unlinkSync(filePath);
// console.log(deleteFile)