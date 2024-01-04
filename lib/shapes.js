//Allows for the shape color to be inputed and tested
class Shape{
    constructor(){
        this.color = '';
    }

    setColor(shapeColor) {
        this.color = shapeColor;
    }
}
  
//Circle class
  class Circle extends Shape{
    render(){ 
       return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`
    }
  }
//Square class
  class Square extends Shape{
    render() {
          return `<rect x="10" y="10" width="200" height="200" fill="${this.color}"/>`;
      }
  }
//Triangle class
  class Triangle extends Shape{
    render() {
          return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;
      }
  };
//Exports the classes to the index.js file
  module.exports = { Triangle, Square, Circle };