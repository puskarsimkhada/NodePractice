import express from 'express';
// import { PORT } from './validate';
import path from 'path';

const app = express();
const homepage = path.join(import.meta.dirname, "public");
app.use("/public", express.static(homepage));

app.get("/profile/:username", (req, res) => {
    console.log(req.params);
    res.send("This is routing in express")
});

app.get("/profile/:username/article/:slug", (req, res) => {
    console.log(req.params);
    const formatedSlug = req.params.slug.replace(/-/g, " ");
    res.send(`I am ${req.params.username} with article ${formatedSlug}`)
});

//Search Query

app.get("/product", (req, res) => {
    console.log(req.query);
    res.send(`<h1>Searching for a product</h1>`)
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`)
})