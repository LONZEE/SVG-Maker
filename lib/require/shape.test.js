const { describe } = require('node:test');
const {Shape, Triangle, Circle, Square} = require('./shape');

describe('Shape', () => {
    it('should set color', () => {
        const shape = new Shape();
        shape.setColor('red');
        expect(shape.color).toEqual('red');
    });
}   );

describe('Triangle', () => {
    it('should render triangle', () => {
        const shape= new Triangle();
        shape.setColor('blue');
        const expected = '<polygon points="150,50 50,150 250,150" style="fill:blue" />';
        expect(shape.render()).toEqual(expected);
    });
}   );

describe('Circle', () => {
    it('should render circle', () => {
        const shape = new Circle();
        shape.setColor('green');
        const expected = '<circle cx="150" cy="100" r="75" style="fill:green" />';
        
        expect(shape.render()).toEqual(expected);
    });
}   );

describe('Square', () => {
    it('should render square', () => {
        const shape = new Square();
        shape.setColor('yellow');
        const expected = '<rect x="50" y="50" width="200" height="200" style="fill:yellow" />';
        expect(shape.render()).toEqual(expected);
    });
}   );
