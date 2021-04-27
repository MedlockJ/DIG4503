import Express from "express";
import fs from "fs";
import cors from "cors";


const App = Express();
const port = 3010;

App.use(cors());

//Read string content
let fileContents = fs.readFileSync("database.json");

//convert string into javascript
let database = JSON.parse(fileContents);

//serve static files to "/" path
App.use("/", Express.static("client/build"));

App.get("/employees/:name", (req,res)=>{
    let result = {"error": "Not available"};

    database.forEach((value)=>{
        if(req.params.name == value.name){
            result = value;
        }

    });

    res.json(result);
})

//Serve request
App.get("/ages/:number", (req, res) => {
    let result = {"error": "Not available"};

    database.forEach((value)=>{
        if(req.params.number == value.age){
            result = value;
        }

    });

    res.json(result);

})

//Serve request 
App.post("/employees/:name/:age", (req, res) => {
    let result = {
        "name": req.params.name,
        "age": parseInt(req.params.age)
    };

    database.push(result);

    fs.writeFileSync("database.json", JSON.stringify(database, null, '\t'));

    res.json(result);
})

//listen for specified port
App.listen(port, ()=>{
    console.log("Server Running!");

});