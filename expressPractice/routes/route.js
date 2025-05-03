import { Router } from "express"
import { blogGet,pathGet,demoGet } from "../controller/blogcontroller.js";

const router = Router();

app.get("/",blogGet)
app.get("/path", pathGet)
app.get("/demo", demoGet)