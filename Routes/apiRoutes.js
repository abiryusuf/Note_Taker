const fs = require("fs");
const path = require("path");

var dataNote;


module.exports = function(app){
  fs.readFile("./db/db.json", "utf8", function(err, data){
    if(err) throw err;
    dataNote = JSON.parse(data);
  })

  app.get("/api/notes", function(req, res){
    res.json(dataNote);
  })

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.

  app.post("/api/notes", function(req, res){
     var newNote = req.body;
     //console.log(newNote);
     dataNote.push(newNote);
     const parsedata = JSON.stringify(dataNote);
     fs.writeFile(path.join("./db/db.json"), parsedata, function(err){
       if(err) throw err;
     })
     res.json(dataNote);
  });

  // API DELETE Requests
  // Below code handles when a user submits a form and thus submits data to the server.

  app.delete("/api/notes/:id", function(req, res){
    var newNote = [];
    //display single ID
    newNote.splice(req.params.id);
    fs.writeFile("./db.db.json", JSON.stringify(newNote), "utf8", function(err){
      if(err) throw err;
    })
    res.json(newNote);

  })


}