import express from "express";
import path from "path";
import url from "url";

const basePath = path.dirname(url.fileURLToPath(import.meta.url));
const publicPath = path.resolve(basePath, "public");

const app = express();
app.use(express.static(publicPath));

app.get('/', function(req, res){
    res.send("hello world");
});

app.get('/faq', function(req, res){
    console.log(req);
    res.send("you has q, i has answer");
})

app.listen(3000);
console.log("Started server on port 3000");