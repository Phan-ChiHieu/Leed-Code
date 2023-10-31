/*
Example 1:

    Input: 
    actions = ["TimeLimitedCache", "set", "get", "count", "get"]
    values = [[], [1, 42, 100], [1], [], [1]]
    timeDelays = [0, 0, 50, 50, 150]
    Output: [null, false, 42, 1, -1]
    Explanation:
    At t=0, the cache is constructed.
    At t=0, a key-value pair (1: 42) is added with a time limit of 100ms. The value doesn't exist so false is returned.
    At t=50, key=1 is requested and the value of 42 is returned.
    At t=50, count() is called and there is one active key in the cache.
    At t=100, key=1 expires.
    At t=150, get(1) is called but -1 is returned because the cache is empty.

Example 2:

    Input: 
    actions = ["TimeLimitedCache", "set", "set", "get", "get", "get", "count"]
    values = [[], [1, 42, 50], [1, 50, 100], [1], [1], [1], []]
    timeDelays = [0, 0, 40, 50, 120, 200, 250]
    Output: [null, false, true, 50, 50, -1, 0]
    Explanation:
    At t=0, the cache is constructed.
    At t=0, a key-value pair (1: 42) is added with a time limit of 50ms. The value doesn't exist so false is returned.
    At t=40, a key-value pair (1: 50) is added with a time limit of 100ms. A non-expired value already existed so true is returned and the old value was overwritten.
    At t=50, get(1) is called which returned 50.
    At t=120, get(1) is called which returned 50.
    At t=140, key=1 expires.
    At t=200, get(1) is called but the cache is empty so -1 is returned.
    At t=250, count() returns 0 because the cache is empty.

*/

class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
  }
  set(key, value, duration) {
    if (!this.cache.has(key)) {
      this.cache.set(key, {
        value,
        ref: setTimeout(() => this.cache.delete(key), duration),
      });
      return false; // Entry added for the first time, return false.
    } else {
      // Entry with the same key already exists; update it.
      clearTimeout(this.cache.get(key).ref);
      this.cache.get(key).value = value;
      this.cache.get(key).ref = setTimeout(() => this.cache.delete(key), duration);
      return true; // Entry updated, return true.
    }
  }
  get(key) {
    return this.cache.has(key) ? this.cache.get(key).value : -1;
  }

  count() {
    return this.cache.size;
  }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
