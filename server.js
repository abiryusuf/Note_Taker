//Dependencies

const fs = require("fs");
const path = require("path")
const express = require("express");

const app = express();

//Sets an initial port
const PORT = process.env.PORT || 8989;

//Sets up initial app to handle data parsing

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Link to css 
app.use(express.static(path.join(_dirname, "public")));

//Route = Map

//Displays homepage
app.get("/", (res, req)=>{
  res.sendFile(path.join(_dirname, "public", "index.html"));
});
app.get("/notes", (res, req)=>{
    res.sendFile(path.join(_dirname, "public", "notes.html"));
    console.log("Note taker page")

});



