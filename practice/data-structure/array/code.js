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
export const pivotIndex1 = (nums) => {
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
export var searchInsert1 = function(nums, target) {
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


/**
 * 合并区间 56
 * @param {number[][]} intervals
 * @return {number[][]}
 */
//先排序,然后从左边开始找
export var merge = function (intervals) {
    intervals.sort((a,b)=>a[0]-b[0]);
    let left =intervals.shift(),right=intervals.shift();
    const res=[]
    
    while(intervals.length>=0&&!!left){
        if(left&&right&&left[0]>right[1]){
            res.push(right);
            right=intervals.shift();
            continue;
        }
        
        if(left&&right&&left[1]>=right[0]){
            left[1]=Math.max(right[1],left[1]);
            right=intervals.shift();
            continue;
        }
        res.push(left);
        left=right;
        right=intervals.shift();
    }
    return res
};
//贪心(类似区间类最好画图)
export var merge1 = function (intervals) {
    intervals.sort((a,b)=>a[0]-b[0]);
    const res=[]
    res.push(intervals[0]);
    for(let i =1;i<intervals.length;i++){
        const cur=intervals[i];
        const resLast=res[res.length-1];
        if(resLast[1]<cur[0]){
            res.push(cur)
        }else{
            resLast[1]=Math.max(cur[1],resLast[1])
        }
    }
    return res
};
