var path =require("path");


module.exports = function(app){
  app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "../public/notes.html"));
    console.log("note taker");
  });
  
//   app.get("../assets/js/index.js", function(req, res){
//     res.sendFile(path.join(__dirname, "/assets/js/index.js"))
//   });
  
//   app.get("../assets/css/styles.css", function(req, res){
//     res.sendFile(path.join(__dirname, "/assets/css/styles.css"))
//   });
  
  app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

}