
class Shape{
    constructor(){
        this.shape = '';
    }

    setColor(shapeColor) {
        this.color = shapeColor;
    }
}
  

  class Circle extends Shape{
    render(){ 
       return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`
    }
  }

  class Square extends Shape{
    render() {
          return `<rect x="10" y="10" width="200" height="200" fill="${this.color}"/>`;
      }
  }

  class Triangle extends Shape{
    render() {
          return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;
      }
  };
   
  module.exports = { Triangle, Square, Circle };