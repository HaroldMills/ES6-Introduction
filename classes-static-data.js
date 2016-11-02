// ES6 does not support static class data, though a later version of
// ECMAScript will. Until then, you can do this:

class A {
  // ...
}
A.staticData = 42;

console.log(A.staticData);
