import {z} from 'zod';
const userAge = 19;
const validSUerAge = z.number().min(18).max(100).int();
const numPort = z.coerce.number().min(1).max(65000).default(3000);
export const PORT = numPort.parse(process.env.PORT);
// console.log(PORT);
try {
    const parseUserAge = validSUerAge.parse(userAge);
    console.log(parseUserAge);
} catch (error) {
    console.log(error.issues[0].message);
}