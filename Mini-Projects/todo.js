import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const noto = [];

const showData = () => {
    console.log("\n1. Add new Note: ")
    console.log("2. How List of Notes: ")
    console.log("3. Exit");
    console.log("4. Delete Note");
    rl.question("Choose a Option: ", handleInputData);
}

const handleInputData = (opt) => {
    if(opt === "1"){
        rl.question("Enter the Note: ", (data) => {
            noto.push(data);
            console.log("Note added: ", data);
            showData();
        })
    }
    else if(opt === "2"){
        console.log("\nList of Note");
        noto.forEach((notes, index) => {
            console.log(`${index+1}. ${notes}`);
        });
        showData();
    }
    else if(opt === "3"){
        rl.close();
        console.log("Exit from the Note");
    }
    else if(opt === '4'){
        console.log("\n Which note do you want to delete: \n");
        rl.question("Choose Option", (option) => {
            noto.pop(option);
            console.log("Deleted: ", option);
            showData();
        })  
    }
    else{
        console.log("Invalid option Try Again!\n");
        showData();
    }
}

showData();