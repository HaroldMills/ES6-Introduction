class A {

  static staticMethod() {
    return 'A';
  }

  constructor(i) {
    this.i = i;
  }

  toString() {
    return 'A(' + this.i + ')';
  }

}

console.log(A.staticMethod()); // ok

// Static methods can only be invoked on classes, not instances.
const a = new A(1);
console.log(a.staticMethod()); // exception
