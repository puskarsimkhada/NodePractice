import chalk from "chalk";
import https from 'https';


const getJoke = async() => {
    try{
        const url = 'https://official-joke-api.appspot.com/random_joke';
        const res = await fetch(url);
        console.log(res);
        const data = await res.json();
        console.log(data);
    }
    catch(err){
        console.error(err);
        console.log("Error while fetching the data");
    }
};

getJoke();