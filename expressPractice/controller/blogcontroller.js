import { pathFile, demoFile } from "../model/blogModel.js";


export const blogGet = async  (req,res) => {
    res.send("HI" + req.params.name);
}

export const pathGet = async (req,res) => {
    res.sendFile(pathFile);
}

export const demoGet  = async (req,res) => {
    res.sendFile(demoFile);
}