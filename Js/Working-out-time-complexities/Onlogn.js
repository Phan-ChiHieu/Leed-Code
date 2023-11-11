function kthLargestElement(arr, k) {
  const sortedArr = arr.sort((a, b) => b - a); // O(n*logn)

  return sortedArr[k - 1]; // O(1)
}

const arr = [29, 10, 14, 37, 13, 18, 24];
const k = 2;

console.log(kthLargestElement(arr, k));

// Time sort

// https://www.youtube.com/watch?v=cmudHYxvff4