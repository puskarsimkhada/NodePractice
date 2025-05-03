import express from 'express';
import path from 'path'
import fs from 'fs'
import { readFile, writeFile } from 'fs';
import { fileURLToPath } from 'url';

const __filename  = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = new express()
const PORT  = 3000;
const pathFile = path.join(__dirname, "index.html");
const demoFile = path.join(__dirname,"public", "demo.html");

// const demo = app.use(express.static('public'));
// console.log("demo:",demo)

app.get("/home/:name", (req,res) => {
    res.send("HI" + req.params.name);
})
app.get("/path", (req,res) => {
    res.sendFile(pathFile);
})
app.get("/demo", (req,res) => {
    res.sendFile(demoFile);
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})
