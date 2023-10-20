/*

Example 1:

    Input: 
    actions = ["EventEmitter", "emit", "subscribe", "subscribe", "emit"], 
    values = [[], ["firstEvent", "function cb1() { return 5; }"],  ["firstEvent", "function cb1() { return 6; }"], ["firstEvent"]]
    Output: [[],["emitted",[]],["subscribed"],["subscribed"],["emitted",[5,6]]]
    Explanation: 
    const emitter = new EventEmitter();
    emitter.emit("firstEvent"); // [], no callback are subscribed yet
    emitter.subscribe("firstEvent", function cb1() { return 5; });
    emitter.subscribe("firstEvent", function cb2() { return 6; });
    emitter.emit("firstEvent"); // [5, 6], returns the output of cb1 and cb2

Example 2:

    Input: 
    actions = ["EventEmitter", "subscribe", "emit", "emit"], 
    values = [[], ["firstEvent", "function cb1(...args) { return args.join(','); }"], ["firstEvent", [1,2,3]], ["firstEvent", [3,4,6]]]
    Output: [[],["subscribed"],["emitted",["1,2,3"]],["emitted",["3,4,6"]]]
    Explanation: Note that the emit method should be able to accept an OPTIONAL array of arguments.

    const emitter = new EventEmitter();
    emitter.subscribe("firstEvent, function cb1(...args) { return args.join(','); });
    emitter.emit("firstEvent", [1, 2, 3]); // ["1,2,3"]
    emitter.emit("firstEvent", [3, 4, 6]); // ["3,4,6"]

Example 3:

    Input: 
    actions = ["EventEmitter", "subscribe", "emit", "unsubscribe", "emit"], 
    values = [[], ["firstEvent", "(...args) => args.join(',')"], ["firstEvent", [1,2,3]], [0], ["firstEvent", [4,5,6]]]
    Output: [[],["subscribed"],["emitted",["1,2,3"]],["unsubscribed",0],["emitted",[]]]
    Explanation:
    const emitter = new EventEmitter();
    const sub = emitter.subscribe("firstEvent", (...args) => args.join(','));
    emitter.emit("firstEvent", [1, 2, 3]); // ["1,2,3"]
    sub.unsubscribe(); // undefined
    emitter.emit("firstEvent", [4, 5, 6]); // [], there are no subscriptions

Example 4:

    Input: 
    actions = ["EventEmitter", "subscribe", "subscribe", "unsubscribe", "emit"], 
    values = [[], ["firstEvent", "x => x + 1"], ["firstEvent", "x => x + 2"], [0], ["firstEvent", [5]]]
    Output: [[],["subscribed"],["emitted",["1,2,3"]],["unsubscribed",0],["emitted",[7]]]
    Explanation:
    const emitter = new EventEmitter();
    const sub1 = emitter.subscribe("firstEvent", x => x + 1);
    const sub2 = emitter.subscribe("firstEvent", x => x + 2);
    sub1.unsubscribe(); // undefined
    emitter.emit("firstEvent", [5]); // [7]

*/

class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  subscribe(event, cb) {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }

    console.log("Before:::", this.events);

    const listeners = this.events.get(event);
    listeners.push(cb);

    console.log("After:::", this.events);

    return {
      unsubscribe: () => {
        const index = listeners.indexOf(cb);
        console.log(":::", index);
        if (index !== -1) {
          const rs = listeners.splice(index, 1);
          console.log("rs", rs); // [ [Function: cb1] ]
          console.log("listeners", listeners); // []
        }
      },
    };
  }

  emit(event, args = []) {
    if (!this.events.has(event)) {
      return [];
    }

    const listeners = this.events.get(event);
    const results = [];

    for (const listener of listeners) {
      console.log(":::", listener);
      results.push(listener(...args));
    }

    return results;
  }
}

// const actions = ["EventEmitter", "emit", "subscribe", "subscribe", "emit"];

// const values = [
//   [],
//   ["firstEvent", "function cb1() { return 5; }"],
//   ["firstEvent", "function cb1() { return 6; }"],
//   ["firstEvent"],
// ];

// emitter.emit("firstEvent"); // [], no callback are subscribed yet

// emitter.emit("firstEvent"); // [5, 6], returns the output of cb1 and cb2

const emitter = new EventEmitter();

const sub = emitter.subscribe("firstEvent", function cb1() {
  return 5;
});

// emitter.subscribe("firstEvent", function cb2() {
//   return 6;
// });

console.log(":::::", emitter.emit("firstEvent"));

