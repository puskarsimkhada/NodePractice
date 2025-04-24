import axios from "axios";
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const url = "https://v6.exchangerate-api.com/v6/f141051acc145ebe6e0cc4e3/latest/USD";

const fetchRate = async() => {
    const response  = await axios.get(url);
    const convert = response.data.conversion_rates;

    const convertcurr = (amount, rate) => {
        return amount * rate;
    }

    rl.question("Enter the amount in USD: ", (amount) => {
        rl.question("Enter the Currency to convert into: ", (curr) => {
            const rates = convert[curr.toUpperCase()];
            console.log(amount, rates, curr);
            if(rates){
                console.log(`${amount} USD is ${convertcurr(amount,rates)} ${curr}`);
            }else{
                console.log("Invalid rates");
            }
            rl.close();
        })
       
    }) 
    
};

fetchRate();