const inquirer = require('inquirer');
const fs = require('fs');

class Shape{
      constructor(){
          this.color = ''
      }
      setColor(color){
        this.color=(color);
    }
  }

  class Circle extends Shape {
    render(){
          `</svg><circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`
    }
  }

  class Square extends Shape{
      render(){
          return `</svg><rect x="10" y="10" width="200" height="200" fill="${this.color}" />`
      }
  }

  class Triangle extends Shape{
      render(){
          return `</svg><polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}/>"`
      }
  };

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
	if (response.text.length > 0 && response.text.length < 4) {
		// 1-3 chars, valid entry
		user_text = response.text;
	} else {
		// 0 or 4+ chars, invalid entry
		console.log("Invalid user text field detected! Please enter 1-3 Characters, no more and no less");
        return;
	};

    if (response.shape === 'Circle') {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        ${Circle}
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${user_text}</text>`
    }
    if (response.shape === 'Square') {
         return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>

         ${Square}

         <text x="110" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${user_text}</text>`
    }
    if (response.shape === 'Triangle') {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        ${Triangle}
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${user_text}</text>`
    } 
    else {
      console.log('Invalid Shape!');
    };
};

function writeToFile(){
    inquirer
      .prompt(questions) 
      .then((response) =>
      fs.writeFile('logo.svg', shape(response) , (err) =>
      err ? console.error(err) : console.log('Generated logo.svg')
    ));
    };

module.exports = writeToFile()