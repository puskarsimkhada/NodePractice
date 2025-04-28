
import router from "./routes/shortener.router.js";
import express from "express";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

//express router
app.use(router);
app.set("view engine", "ejs");

app.listen(PORT, () => {
  console.log(`Server is running ont he port ${PORT}`);
});
