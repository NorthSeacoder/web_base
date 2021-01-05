/**
 * 寻找数组的中心索引724
 * @param {number[]} nums
 * @return {number}
 */

/**
 * 最初的思路是直接前后两次遍历求和,然后遍历判断是否相等
 *
 */
var pivotIndex = function(nums) {
    if (nums.length < 3) return -1;

    const rightMap = {};
    const leftMap = {};

    for (let i = 0; i < nums.length; ++i) {
        leftMap[i] = (leftMap[i - 1] || 0) + (nums[i - 1] || 0);
        rightMap[i] = (nums[nums.length - i] || 0) + (rightMap[i - 1] || 0);
    }
    for (let i = 0; i < nums.length; ++i) {
        if (leftMap[i] === rightMap[nums.length - i - 1]) {
            return i;
        }
    }
    return -1;
};
/**
 *
 * 优化后,利用左求和*2+中心索引值 = 总和
 */
const pivotIndex1 = (nums) => {
    let sum = 0;
    for (let i = 0; i < nums.length; ++i) {
        sum += nums[i];
    }
    let sunLeft = 0;
    for (let i = 0; i < nums.length; ++i) {
        if (sunLeft * 2 + nums[i] === sum) return i;
        sunLeft += nums[i];
    }
    return -1;
};

/**
 * 搜索插入位置35
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//暴力解法
var searchInsert = function(nums, target) {
    let index = 0;
    nums.forEach((num, i) => {
        if (num < target) index = i + 1;
        if (num === target) return (index = i);
    });
    return index;
};
//二分查找
var searchInsert1 = function(nums, target) {
    let left = 0,
        right = nums.length-1;
    while (left <= right) {
        let mid = ((right - left) >> 1) + left;
        if (nums[mid] >= target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
};

export default {pivotIndex1};
