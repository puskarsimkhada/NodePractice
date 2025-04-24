import readline from 'readline';
import fs from 'fs';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// const fileData = [];

const showFile = () => {
    rl.question("Enter the file name: ", (data) => {
            rl.question("ENter the content: ", (content) => {
                fs.writeFile(`${data}.txt`, content, (err) => {
                    if(err){

                        console.log("Error while writing file");
                    }
                    else{
                        console.log("FIle created successfully");
                    }
                });
            })
    })
};

showFile();