var jump = function (nums) {
  const size = nums.length;

  let destination = size - 1;

  let curCoverage = 0,
    lastJumpIdx = 0;

  let timesOfJump = 0;

  if (size == 1) {
    return 0;
  }

  for (let i = 0; i < size; i++) {
    curCoverage = Math.max(curCoverage, i + nums[i]);

    if (i == lastJumpIdx) {
      lastJumpIdx = curCoverage;

      timesOfJump++;

      if (curCoverage >= destination) {
        return timesOfJump;
      }
    }
  }

  return timesOfJump;
};
