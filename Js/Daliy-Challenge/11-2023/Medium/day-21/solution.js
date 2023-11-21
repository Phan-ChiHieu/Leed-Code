/*

Example 1:

    Input: nums = [42,11,1,97]
    Output: 2
    Explanation: The two pairs are:
    - (0,3) : 42 + rev(97) = 42 + 79 = 121, 97 + rev(42) = 97 + 24 = 121.
    - (1,2) : 11 + rev(1) = 11 + 1 = 12, 1 + rev(11) = 1 + 11 = 12.

Example 2:

    Input: nums = [13,10,35,24,76]
    Output: 4

*/


var countNicePairs = function(nums) {
    function reverse(num) {
        let rev = 0;
        while (num > 0) {
            rev = rev * 10 + num % 10;
            num = Math.floor(num / 10);
        }
        return rev;
    }

    const mod = 1000000007;

    nums = nums.map(num => num - reverse(num));
    nums.sort((a, b) => a - b);

    let res = 0;
    let i = 0;
    while (i < nums.length - 1) {
        let cont = 1;
        while (i < nums.length - 1 && nums[i] === nums[i + 1]) {
            cont++;
            i++;
        }
        res = (res % mod + (cont * (cont - 1)) / 2) % mod;
        i++;
    }

    return Math.floor(res % mod);
};