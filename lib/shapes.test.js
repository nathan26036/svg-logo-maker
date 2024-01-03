const { Triangle, Square, Circle } = require("./shapes");

describe('circle', () => {

    it('should make the shape fill blue', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="blue"/>');
    });

});

describe('square', () => {

    it('should make the shape fill blue', () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="10" y="10" width="200" height="200" fill="blue"/>');
    });

});

describe('triangle', () => {

    it('should make the shape fill blue', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
    });

});
