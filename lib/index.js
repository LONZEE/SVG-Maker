const {Triangle, Circle, Square } = require('./require/shape');  // Importing the Shape, Triangle, Circle and Square classes from shape.js
const inquirer = require('inquirer');   // Importing the inquirer module to prompt questions
const fs = require('fs');   // Importing the fs module
const questions = require('./require/questions');   // Importing the questions array from questions.js


inquirer.prompt(questions).then((answers) => { // Prompting the questions
    const{ text, shape, textColor, shapeColor } = answers;  // Destructuring the answers object
    let svgElement = '';    // Empty string to store the SVG element
    
    switch(shape){
        case 'Triangle':
            const triangle = new Triangle();
            triangle.setColor(shapeColor);
            svgElement = triangle.render();
            console.log("You have chosen Triangle");
            break;
        case 'Circle':
            const circle = new Circle();
            circle.setColor(shapeColor);
            svgElement = circle.render();
            console.log("You have chosen Circle");
            break;
        case 'Square':
            const square = new Square();
            square.setColor(shapeColor);
            svgElement = square.render();
            console.log("You have chosen Square");
            break;
    }    
    const finalSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${svgElement}
        <text x="150" y="120" font-size="30" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
    fs.writeFileSync('./object/Shape.svg', finalSvg);
    console.log('SVG file created');
}
);
