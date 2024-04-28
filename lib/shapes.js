class Shape{
    constructor(){
        this.color = "";
    }
    setColor(){
        return this.color;
    }
}
class Circle extends Shape{
    render(){
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`
    }
}
class Square extends Shape{
    render(){
        return `<rect x="0" y="0" width="100%" height="100%" fill="${this.color}">`
    }
}

class Triangle extends Shape{
    render(){
        return `<polygon points="50%,0 0,100% 100%,100%" fill="${this.color}">`
    }
}

class Rectangle extends Shape{
    render(){
        return `<rect x="0" y="0" width="100%" height="100%" fill="${this.color}">`
    }
}

class Star extends Shape{
    render(){
        return `<polygon points="50%,0 61%,35% 98%,35% 68%,57% 79%,91% 50%,70% 21%,91% 32%,57% 2%,35% 39%,35%" fill="${this.color}">`
    }
};

module.exports = {Circle, Square, Triangle, Rectangle, Star}
