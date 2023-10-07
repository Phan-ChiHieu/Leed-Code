/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

class Counter {
  constructor(start) {
    this.count = start;
  }

  next() {
    return this.count++;
  }
}

const counter = new Counter(10);
console.log(counter.next()); // 10
console.log(counter.next()); // 11
console.log(counter.next()); // 12
