function bubbleSort(nums) {
  for (var i = 0; i < nums.length - 1; i++) {
    // O(n)
    for (var j = 0; j < nums.length; j++) {
      // O(n)
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }

  return nums;

  // time complexity => O(n*n) => O(n^2)
}

console.log(bubbleSort([2, 4, 3, 1, 5, 8, 7, 9]));
