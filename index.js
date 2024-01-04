const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle } = require("./lib/shapes");

// Questions for the users logo choices 
const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'Choose which logo shape you would like?',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to 3 Characters for the logo text:',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter a color keyword OR a hexadecimal number for the text color:',
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter a color keyword OR a hexadecimal number for the shape color:',
    },
];

// Generates the shape based on the users inputs
function shape(response) {

    let svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
// Checks if the text is less than 4 letters
	if (response.text.length < 4) {
		// 1-3 chars, valid entry
		user_text = response.text;
	} else {
		// 0 or 4+ chars, invalid entry
		console.log('Invalid user text field detected! Please enter 1-3 Characters, no more and no less');
        return;
	};
//Generates the circle svg data
    if (response.shape === 'Circle') {
        shapeChoice = new Circle();
        svg += `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${response.shapeColor}"/>`;
        svg +=  `
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${user_text}</text>
</svg>`
    }//Generates the Square svg data
    if (response.shape === 'Square') {
        shapeChoice = new Square();
        svg += `<rect x="10" y="10" width="200" height="200" fill="${response.shapeColor}"/>`;
        svg +=  `
<text x="110" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${user_text}</text>
</svg>`
    }//Generates the Triangle svg data
    if (response.shape === 'Triangle') {
        shapeChoice = new Triangle();
        svg += `<polygon points="150, 18 244, 182 56, 182" fill="${response.shapeColor}"/>`;
        svg +=  `
<text x="150" y="145" font-size="60" text-anchor="middle" fill="${response.textColor}">${user_text}</text>
</svg>`
    }


    return svg
};
//Writes the svg file
function writeToFile(){
    inquirer
      .prompt(questions) 
      .then((response) =>
      fs.writeFile('logo.svg', shape(response) , (err) =>
      err ? console.error(err) : console.log('Generated logo.svg')
    ));
    };

writeToFile();