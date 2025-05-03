import path from 'path'
import { fileURLToPath } from 'url';


const __filename  = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const pathFile = path.join(__dirname, "index.html");
export const demoFile = path.join(__dirname,"public", "demo.html");