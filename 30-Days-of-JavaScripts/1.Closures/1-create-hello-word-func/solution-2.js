/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

function createHelloWorld() {
  return () => "Hello World";
}

const f = createHelloWorld();
console.log(f()); // "Hello World"
