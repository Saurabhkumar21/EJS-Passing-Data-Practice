import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static("public"))

app.get("/",(req, res)=>{
    // res.sendFile(__dirname+"/views/index.ejs")

    res.locals.nameCount=-1;
    res.render("index.ejs");
})

app.post("/submit",(req, res)=>{

     var fullNameCount = (req.body.fname + req.body.lname).length
     res.render("index.ejs", { nameCount: fullNameCount })
})

app.listen(port, ()=>{
    console.log(`Server is up and running at ${port}`);
})