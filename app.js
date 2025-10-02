console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const res = require("express/lib/response");



// MongoDB ni chaqirish
const db = require("./server").db();
const mongodb = require("mongodb");

//1. KIRISH KODLARI
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const fs = require("fs");
// let user;
// fs.readFile("database/user.json", "utf8", (err, data) => {
//     if (err){
//         console.log("ERROR")
//     } else {
//         user = JSON.parse(data)
//     }
// });

//2. Sessions: SEssion Codes

//3. Views ga bog'liq kodlar
app.set("views", "views");

app.set("view engine", "ejs");

//4 Routing Kodlari:
app.post("/create-item", (req, res) => {
  const new_reja = req.body.reja;

  db.collection("plans").insertOne({ reja: new_reja }, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Something went wrong");
    }
    res.json({ _id: result.insertedId, reja: new_reja });
  });
});


app.get("/hello", function(req, res) {
    res.end(`<h1>GOOD MORNING</h1>`);
} );
app.get('/author', (req, res) => {
    res.render("develope", {user: user});
});
app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id)}, function(err, data){
        res.json({state: "success"});
    });
});
// 
app.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log(data);

  db.collection("plans").findOneAndUpdate(
    { _id: new mongodb.ObjectId(data.id) },
    { $set: { reja: data.new_input } },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

// 
// 
app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany(function () {
      res.json({ state: "All plans have been deleted....!" });
    });
  }
});

// 
app.get("/",function(req, res){
    console.log('user entered /');
    db.collection("plans").find().toArray((err, data) =>{
        if(err) {
            console.log(err);
            res.end("Something went wrong!!!");
        } else {
            console.log(data);
            res.render("reja", {items: data}); 
        }
    });
});


module.exports = app;