import Express from 'express';
const App = Express();
const port = 3010

App.get('/people/:name', (req, res)=> {
    res.send("The user name you requested is " + req.params.name);
});

App.get('/name/:id', (res,req)=>{
    res.send("The ID you requested is " + req.params.id);

});

App.listen(port, ()=>{


});