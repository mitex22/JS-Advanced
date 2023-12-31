class Circle {
    _diameter;
    constructor(r) {
        this.radius = r;
        this._diameter = r * 2;
    }

    get diameter(){
        return this._diameter;
    }

    set diameter(d) {
        this._diameter = d;
        this.radius = d / 2;
    }

    get area() {
        return Math.PI * (this.radius ** 2)
    }
}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);

c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
