const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle } = require("./lib/shapes");

// questions
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

function shape(response) {

    let svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;

	if (response.text.length < 4) {
		// 1-3 chars, valid entry
		user_text = response.text;
	} else {
		// 0 or 4+ chars, invalid entry
		console.log('Invalid user text field detected! Please enter 1-3 Characters, no more and no less');
        return;
	};

    if (response.shape === 'Circle') {
        shapeChoice = new Circle();
        svg += `<polygon points="150, 18 244, 182 56, 182" fill="${response.shapeColor}"/>`;
        svg +=  `
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${user_text}</text>
</svg>`
    }
    if (response.shape === 'Square') {
        shapeChoice = new Square();
        svg += `<rect x="10" y="10" width="200" height="200" fill="${response.shapeColor}"/>`;
        svg +=  `
<text x="110" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${user_text}</text>
</svg>`
    }
    if (response.shape === 'Triangle') {
        shapeChoice = new Circle();
        svg += `<polygon points="150, 18 244, 182 56, 182" fill="${response.shapeColor}"/>`;
        svg +=  `
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${user_text}</text>
</svg>`
    } 
    else {
      console.log('Invalid Shape!');
    };


    return svg
};

function writeToFile(){
    inquirer
      .prompt(questions) 
      .then((response) =>
      fs.writeFile('logo.svg', shape(response) , (err) =>
      err ? console.error(err) : console.log('Generated logo.svg')
    ));
    };

writeToFile();