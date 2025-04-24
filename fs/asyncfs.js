const fs = require('fs');
const path = require("path");

const fileName = "asynctext.txt";
const filePath = path.join(__dirname,fileName);


//writing into the file
fs.writeFile(filePath, "This is my async file ", "utf-8", ((err) => {
    if(err){

        console.error(err);
        
    }
    else{
        console.log("Files has been saved");
    }
}));


//Reading a file
fs.readFile(filePath, "utf-8", ((err, data) => {
    if(err){

        console.error(err);
        
    }
    else{
        console.log(data);
    }
}));

//Updating the file
fs.appendFile(filePath, "This is my async append file ", "utf-8", ((err) => {
    if(err){

        console.error(err);
        
    }
    else{
        console.log("Files has been Appended");
    }
}));

//Delete file
// fs.unlink(filePath,((err) => {
//     if(err){
//         console.error(err);
//     }else{
//         console.log("File deleted successfully");
//     }
// }))