class Shape{
    constructor(){
        this.color = '';
    }

    setColor(color){
        this.color = color;
    }
}

class Triangle extends Shape{
    render(){
        return `<polygon points="150,50 100,100 200,100" style="fill:${this.color};stroke:black;stroke-width:1" />`;
    }
}

class Circle extends Shape{
    render(){
        return `<circle cx="150" cy="100" r="75" style="fill:${this.color};stroke:black;stroke-width:1" />`;
    }
}

class Square extends Shape{
    render(){
        return `<rect x="100" y="50" width="100" height="100" style="fill:${this.color};stroke:black;stroke-width:1" />`;
    }
}

module.exports = { Shape, Triangle, Circle, Square };