/*
Example 1:

    Input: init = 5, calls = ["increment","reset","decrement"]
    Output: [6,5,4]
    Explanation:
    const counter = createCounter(5);
    counter.increment(); // 6
    counter.reset(); // 5
    counter.decrement(); // 4

Example 2:

    Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
    Output: [1,2,1,0,0]
    Explanation:
    const counter = createCounter(0);
    counter.increment(); // 1
    counter.increment(); // 2
    counter.decrement(); // 1
    counter.reset(); // 0
    counter.reset(); // 0


*/

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

class Counter {
  constructor(init) {
    // tạo biến init và presentCount
    this.init = init;
    this.presentCount = init;
  }

  increment() {
    this.presentCount += 1;
    return this.presentCount;
  }

  decrement() {
    this.presentCount -= 1;
    return this.presentCount;
  }

  reset() {
    this.presentCount = this.init;
    return this.presentCount;
  }
}

function createCounter(init) {
  return new Counter(init);
}

const counter = createCounter(5);

console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
