console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const res = require("express/lib/response");



// MongoDB ni chaqirish

//1. KIRISH KODLARI
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const fs = require("fs");
let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err){
        console.log("ERROR")
    } else {
        user = JSON.parse(data)
    }
});

//2. Sessions: SEssion Codes

//3. Views ga bog'liq kodlar
app.set("views", "views");

app.set("view engine", "ejs");

//4 Routing Kodlari:
app.post("/create-item", (req, res) => {console.log(req.body);
res.end("success");
console.log('user entered /');
const new_reja = req.body.reja;
db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
    if(err){
        console.log(err);
        res.end("Something went wrong");
    }
    else{
        res.end("Successfully added"); 
    }
});


});
// app.get("/hello", function(req, res) {
//     res.end(`<h1>GOOD MORNING</h1>`);
// } );
// app.get('/author', (req, res) => {
//     res.render("develope", {user: user});
// });
// app.get("/",function(req, res){
//     console.log('user entered /');
//     db.collection("plans").find().toArray((err, data) =>{
//         if(err) {
//             console.log(err);
//             res.end("Something went wrong!!!");
//         } else {
//             console.log(data);
//             res.render("reja", {items: data}); 
//         }
//     });
// });


module.exports = app;