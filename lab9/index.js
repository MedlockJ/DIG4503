import Express from "express";
import fs from "fs";

const App = Express();
const port = 3010;

let fileContents = fs.readFileSync("database.json");

let database = JSON.parse(fileContents);

App.use("/", Express.static("public"));

App.get("/employees/:name", (req,res)=>{
    let result = {"error": "Not available"};

    database.forEach((value)=>{
        if(req.params.name == value.name){
            result = value;
        }

    });

    res.json(result);
});

App.get("/ages/:number", (req, res) => {
    let result = {"error": "Not available"};

    database.forEach((value)=>{
        if(req.params.number == value.age){
            result = value;
        }

    });

    res.json(result);

});

App.post("/api/movies/:name/:score", (req, res) => {
    let result = {
        "name": req.params.name,
        "score": parseInt(req.params.score)
    };

    database.push(result);

    fs.writeFileSync("database.json", JSON.stringify(database, null, '\t'));

    res.JSON(result);
})

App.listen(port, ()=>{
    console.log("Server Running!");

});