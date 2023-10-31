/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

function expect(val) {
  return {
    toBe: (val2) => {
      if (val !== val2) console.log("Not Equal");
      else return true;
    },
    notToBe: (val2) => {
      if (val === val2) console.log("Equal");
      else return true;
    },
  };
}

console.log(expect(5).toBe(5));
console.log(expect(5).notToBe(5));
