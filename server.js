
const express = require("express");
const app = express();
//root homepage
app.get("/", function(req, res){
  res.send("<h1>Hellooo</h1>");
})

app.get("/contact", function(req,res){
  res.send("Contact me :)");
})

app.get("/about", function(req,res){
  res.send("I am hiya :) cool kid");
})

app.get("/hobbies", function(req,res){
  res.send("I am hiya :) meow kid");
})

app.listen(3000, function(){
  console.log("Server started on port 3000");
})
