class A {
  constructor(i) {
    this.i = i;
  }
  toString() {
    return 'A(' + this.i + ')';
  }
}

class B extends A {
  constructor(i, j) {
    super(i);
    this.j = j;
  }
  toString() {
    return 'B(' + this.i + ', ' + this.j + ')';
  }
}

const a = new A(1);
console.log(a.toString(), a.i);

const b = new B(2, 3);
console.log(b.toString(), b.i, b.j);

// A "class" is really just a function, as before.
console.log(typeof A);
