console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require('http');
//1. KIRISH KODLARI
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//2. Sessions: SEssion Codes

//3. Views ga bog'liq kodlar
app.set("views", "views");

app.set("view engine", "ejs");

//4 Routing Kodlari:
app.post("/create-item", (req, res) => {console.log(req.body);
res.json({test: "success"});

});
app.get("/hello", function(req, res) {
    res.end(`<h1>GOOD MORNING</h1>`);
} );
app.get("/",function(req, res){
    res.render("reja");
});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function (req, res){
    console.log(`The server is running on the port ${PORT}, https://localhost${PORT}`);
});
