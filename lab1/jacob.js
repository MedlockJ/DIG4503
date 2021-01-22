const Person = require("./person.js");

class Jacob extends Person {
    constructor(name, colors){
        super(name, colors);
    }
}

module.exports = Jacob;