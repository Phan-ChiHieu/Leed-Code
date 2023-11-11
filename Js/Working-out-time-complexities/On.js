function incrementValues(arr) {
  const increment = 1; // constant

  for (let i = 0; i < arr.length; i++) {
    arr[i] += increment;
  }
  return arr;
} // O(n)

console.log(incrementValues([1, 10, 7, 16, 3, 4]));

// time complexity - O(n)
// space complexity - O(1)
