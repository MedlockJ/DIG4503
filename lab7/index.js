import Express from 'express';

const App = Express();
const port = 45030;

const names = [
    'Cortney',
    'Dewayne',
    'Trenton',
    'Pamala',
    'Ettie',
    'Errol',
    'Lorrie',
    'Hang',
    'Lauryn',
    'Caterina',
    'Isa',
    'Marcela'
];

//Search if the array includes the name in the path
App.get('/people/:person', (req,res) => {
    let person = req.params.person;
    if (names.includes(person)){
        res.json({Name: person});
    }
    else{
        res.json({ Name: "Not available"});
    }
});

//Filter search by letter (case sensitive)
App.get('/search/:name', (req,res) => {
    const result = names.filter(str => str.includes(req.params.name));

    if (result != 0){
        res.json({ search: result});
    }
    else{
        res.json({ search: "Not available"});
    }
});

App.listen(port, () => {

});