const express = require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set("view engine","ejs");
var items=[];

app.post("/",function(req,res){
var item=(req.body.item);
items.push(item);
res.redirect("/");
})


app.get("/",function(req,res){
  var day=new Date();
  var today=day.getDay();
var option={
weekday:"long",
day:"numeric",
month:"long"
};
  dayValue=day.toLocaleDateString("en-US",option);
  res.render("list",{todayDay:dayValue,newItem:items});
})


app.listen(3000,function(){
  console.log("Executing Work")
})
