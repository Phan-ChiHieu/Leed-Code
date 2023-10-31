class Once {
  constructor(fn) {
    this.fn = fn;
    this.called = false;
  }

  call(...args) {
    if (!this.called) {
      this.called = true;
      return (this.result = fn(...args));
    } else {
      return undefined;
    }
  }
}

let fn = (a, b, c) => a + b + c;
let once = new Once(fn);

console.log(once.call(1, 2, 3)); // 6
console.log(once.call(2, 3, 6)); // undefined
