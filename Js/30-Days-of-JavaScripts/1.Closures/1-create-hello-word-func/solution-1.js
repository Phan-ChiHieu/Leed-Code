/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

function createHelloWorld() {
  const greeting = "Hello World";

  return function () {
    return greeting;
  };
}

const f = createHelloWorld();
console.log(f()); // "Hello World"
