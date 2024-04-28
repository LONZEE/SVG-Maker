const { Shape, Triangle, Circle, Square } = require('./require/shape');
const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter 3 charecters:',
        validate:(input) => input.length === 3 ? true : 'Please enter 3 charecters',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['Triangle', 'Circle', 'Square'],
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color:',
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter background color:',
    },
];

inquirer.prompt(questions).then((answers) => {
    const{ text, shape, textColor, shapeColor } = answers;
    const shapeObj = new Shape();
    let svgElement = '';

    shapeObj.setColor(shapeColor);

    switch(shape){
        case 'Triangle':
            const triangle = new Triangle();
            triangle.setColor(shapeColor);
            svgElement = triangle.render();
            break;
        case 'Circle':
            const circle = new Circle();
            circle.setColor(shapeColor);
            svgElement = circle.render();
            break;
        case 'Square':
            const square = new Square();
            square.setColor(shapeColor);
            svgElement = square.render();
            break;
    }

    let x = 150, y = 120;
    if(shape === 'Triangle'){
        y = 135;
    } else if(shape === 'Square'){
        y = 145;
    }

    const finalSvg = `<svg  xmlns="http://w3.org/2000/svg" width=300 height="200">
    ${svgElement}
    <text x=${x} y=${y} fill=${textColor} font-size="20" text-anchor="middle">${text}</text></svg>`;
    fs.writeFileSync('output.svg', finalSvg);
    console.log('SVG file created');
}
);