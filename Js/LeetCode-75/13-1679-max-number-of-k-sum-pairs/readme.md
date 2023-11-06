# Input: nums = [1,2,3,4], k = 5

# 1

    - nums[i] = nums[0] = 1
    - freq = Map(0) {}
    - Chay vao else
    - freq.set(nums[i], freq.get(nums[i]  + 1 || 1))

# 2

    - nums[i] = nums[1] = 2
    - freq = Map(1) { 1 => 1 }
    - k - nums[1] = 5 - 2 = 3 (chua co)
    - Chay vao else
    - freq.set(nums[1], freq.get(nums[1]  + 1 || 1)) => req.set(2, 1)

# 3

    - nums[i] = nums[2] = 3
    - feq = Map(2) { 1 => 1, 2 => 1 }
    - k - nums[i] = 5 - 3 = 2
    - Chay vao if
    - Vi freq.get(k - nums[i]) === 2  != 1 => Chay vao else
    - freq.set(k - nums[i], freq.get(k - nums[i]) - 1) => freq.set(2, 1)
    - count++ === 1

# 4

    - nums[i] = nums[3] = 4
    - feq = Map(2) { 1 => 1, 2 => 1 }
    - k - nums[i] = 5 - 4 = 1
    - Chay vao if
    - Vi freq.get(k - nums[i]) ===  1 == 1 => Chay vao if
    - freq.delete(k - nums[i]); => freq.delete(1);
    - count++ === 2
