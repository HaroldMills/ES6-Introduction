// class A
function A(i) {
  this.i = i;
}
A.prototype.toString = function() {
  return 'A(' + this.i + ')';
};

// class B
function B(i, j) {
  A.call(this, i);
  this.j = j;
}
B.prototype = Object.create(A.prototype);
B.prototype.toString = function() {
  return 'B(' + this.i + ', ' + this.j + ')';
}

const a = new A(1);
console.log(a.toString(), a.i);

const b = new B(2, 3);
console.log(b.toString(), b.i, b.j);
