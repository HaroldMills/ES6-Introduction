class Circle {

  constructor(radius) {
    this._r = radius;
  }

  set radius(radius) {
    this._r = radius;
  }

  get radius() {
    return this._r;
  }

  get area() {
    const r = this.radius
    return Math.PI * r * r;
  }

}

const c = new Circle(2);
console.log(c.radius, c.area);
