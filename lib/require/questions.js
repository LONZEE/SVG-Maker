const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter 3 charecters:',
        validate:(input) => input.length === 3 ? true : 'Please enter 3 characters',
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

module.exports = questions;