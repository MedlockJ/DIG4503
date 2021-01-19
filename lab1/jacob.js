const Person = require("./person.js");

class Jacob extends Person {
    constructor(name, colors, bgColors){
        super(name, colors, bgColors);
    }
}

module.exports = Jacob;