const inquirer = require('inquirer');
const fs = require('fs');

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
    if (response.shape === 'Circle') {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill='${response.shapeColor}' />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>
      
      </svg>`
    }
    if (response.shape === 'Square') {
         return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="10" y="10" width="200" height="200" fill="${response.shapeColor}" />
      
        <text x="110" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>
      
      </svg>`
    }
    if (response.shape === 'Triangle') {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${response.shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>
      
      </svg>`
    }
}

function writeToFile(){
    inquirer
      .prompt(questions)
      .then((response) =>
      fs.writeFile('logo.svg', shape(response) , (err) =>
      err ? console.error(err) : console.log('Logo Generated!')
    ));
    };

module.exports = writeToFile()