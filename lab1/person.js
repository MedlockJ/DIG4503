const chalk = require('chalk');
const beep = require('beepbeep');

class Person{
    constructor(name, favoriteColor, backgroundColors){
        this.name = name;
        this.favoriteColor = favoriteColor;
        this.backgroundColors = backgroundColors;
    }

    speak(){
        for (let i=0; i<this.favoriteColor.length;i++){
            console.log(chalk.bgHex(this.backgroundColors[i]).hex(this.favoriteColor[i])(this.name));
            beep[i];
        }
    }

}
module.exports = Person;